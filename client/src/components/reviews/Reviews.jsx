import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RatingBreakdown from './RatingBreakdown';
import ReviewTemplate from './ReviewTemplate';
// import ReviewsSortHeader from './ReviewsSortHeader';
import styles from '../../styleComponents/Reviews.module.css';
import ReviewsModal from './ReviewModal';
import StarRating from '../StarRating';

const Reviews = ({ productId, name }) => {
  const [reviews, setReviews] = useState([]);
  const [displayedReviews, setDisplayedReviews] = useState([]);
  const [metaReviews, setMetaReviews] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [sort, setSort] = useState('relevant');
  const [moreButton, setMoreButton] = useState('More Reviews');

  const getReviews = (id) => {
    const reviewsURL = `/reviews/sort/${id}/${sort}`;
    axios.get(reviewsURL)
      .then(({ data }) => {
        setReviews(data);
        if (expanded) {
          setDisplayedReviews(data);
        } else {
          setDisplayedReviews(data.slice(0, 2));
        }
      })
      .catch(console.log);
  };

  const getMetaReviews = (id) => {
    const metaReviewsURL = `/reviews/meta/${id}`;
    axios.get(metaReviewsURL)
      .then(({ data }) => {
        setMetaReviews(data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getReviews(20101);
    setExpanded(expanded);
  }, [sort]);

  useEffect(() => getMetaReviews(20101), []);

  useEffect(() => {
    expanded
    ? setDisplayedReviews(reviews)
    : setDisplayedReviews(reviews.slice(0, 2))
  }, [expanded]);

  return (
    <div className={styles.parentContainer}>
      <div className={styles.parentBreakdown}>
        <RatingBreakdown
          reviews={reviews}
          metaReviews={metaReviews}
        />
      </div>
      <div className={styles.parentHeader}>
        <div>
          Sort on:
          <select onChange={(e) => setSort(e.target.value)}>
            <option>Relevant</option>
            <option>Helpful</option>
            <option>Newest</option>
          </select>
        </div>
      </div>
      <div style={{ maxHeight: '800px', overflowY: 'scroll' }} className={styles.parentIndividualReview}>
        {displayedReviews.map((review, id) => (
          <ReviewTemplate review={review} key={id} />
        ))}
      </div>
      <div className={styles.parentFooter}>
        {reviews.length > 1
          ? (
            <button
              className={styles.footerButton}
              type="submit"
              onClick={() => {
                setExpanded(!expanded);
                (expanded)
                  ? setMoreButton('More Reviews')
                  : setMoreButton('Show Less Reviews');
              }}
            >
              {moreButton}
            </button>
          )
          : null}
        <button className={styles.footerButton} type="submit" onClick={() => setIsOpen(true)}>Add Review  + </button>
        <ReviewsModal
          productId={productId}
          getReviews={getReviews}
          onClose={() => setIsOpen(false)}
          open={isOpen}
          name={name}
          metaReviews={metaReviews}
        />
      </div>
    </div>
  );
};

export default Reviews;
