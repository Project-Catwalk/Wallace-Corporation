import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RatingBreakdown from './RatingBreakdown';
import ReviewTemplate from './ReviewTemplate';
import ReviewsSortHeader from './ReviewsSortHeader';
import styles from '../../styleComponents/Reviews.module.css';
import ReviewsModal from './ReviewModal';

const Reviews = ({ productId, name }) => {
  const [reviews, setReviews] = useState([]);
  const [metaReviews, setMetaReviews] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [moreButton, setMoreButton] = useState('More Reviews');

  const getReviews = (id) => {
    axios.get(`/reviews/${id}/${expanded}`)
      .then(({ data }) => {
        setReviews(data);
      })
      .catch(console.log);
  };

  const getMetaReviews = (id) => {
    axios.get(`/reviews/meta/${id}`)
      .then(({ data }) => {
        setMetaReviews(Object.entries(data.characteristics));
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getReviews(20100);
    getMetaReviews(20100);
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
        <ReviewsSortHeader />
      </div>
      <div style={{ maxHeight: '800px', overflowY: 'scroll' }} className={styles.parentIndividualReview}>
        {reviews.map((review, id) => (
          <ReviewTemplate review={review} key={id} />
        ))}
      </div>
      <div className={styles.parentFooter}>
        <button
          className={styles.footerButton}
          type="submit"
          onClick={() => {
            setExpanded(!expanded);
            (expanded)
              ? setMoreButton('More Reviews')
              : setMoreButton('Show Less Reviews')
          }}
        >
          {moreButton}
        </button>
        <button className={styles.footerButton} type="submit" onClick={() => setIsOpen(true)}>Add Review</button>
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
