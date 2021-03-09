import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RatingBreakdown from './RatingBreakdown';
import ReviewTemplate from './ReviewTemplate';
import styles from '../../styleComponents/Reviews.module.css';
import ReviewsModal from './ReviewModal';
import StarRating from '../StarRating';

const Reviews = ({ productId, name, handleReviewAverage }) => {
  const [reviews, setReviews] = useState([]);
  const [displayedReviews, setDisplayedReviews] = useState([]);
  const [metaReviews, setMetaReviews] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [sort, setSort] = useState('relevant');
  const [moreButton, setMoreButton] = useState('More Reviews');

  const charObject = {
    Size: {
      1: "A size too small",
      2: "1/2 a size too small",
      3: "Perfect",
      4: "1/2 a size too big",
      5: "A size too wide",
    },
    Width: {
      1: "Too narrow",
      2: "Slightly narrow",
      3: "Perfect",
      4: "Slightly wide",
      5: "Too wide",
    },
    Comfort: {
      1: "Uncomfortable",
      2: "Slightly uncomfortable",
      3: "Ok",
      4: "Comfortable",
      5: "Perfect"
    },
    Quality: {
      1: "Poor",
      2: "Below average",
      3: "What I expected",
      4: "Pretty great",
      5: "Perfect",
    },
    Length: {
      1: "Runs short",
      2: "Runs slightly short",
      3: "Perfect",
      4: "Runs slightly long",
      5: "Runs long",
    },
    Fit: {
      1: "Runs tight",
      2: "Runs slightly tight",
      3: "Perfect",
      4: "Runs slightly long",
      5: "Runs long",
    },
  };

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
    getReviews(20103);
    setExpanded(expanded);
  }, [sort]);

  useEffect(() => {
    getMetaReviews(20103);
    getReviews(20103);
  }, [productId]);

  useEffect(() => {
    (expanded)
    ? setDisplayedReviews(reviews)
    : setDisplayedReviews(reviews.slice(0, 2))
  }, [expanded]);

  const handleStarFilters = (filters) => {
    const reviewArray = [];
    if (filters.length === 0) {
      setDisplayedReviews(reviews.slice(0, 2));
    } else {
      filters.map((filter) => {
        reviews.filter((review) => {
          if (review.rating === Number(filter)) reviewArray.push(review);
        });
      });
      setDisplayedReviews(reviewArray);
    }
  };

  const handleMoreButton = () => {
    (displayedReviews.length <= 2)
      ? setMoreButton('More Reviews')
      : setMoreButton('Show Less Reviews');
  };

  useEffect(() => {
    handleMoreButton();
  }, [displayedReviews]);

  return (
    (metaReviews && reviews && productId)
      ? (
        <div className={styles.parentContainer}>
          <div className={styles.parentBreakdown}>
            <RatingBreakdown
              reviews={reviews}
              metaReviews={metaReviews}
              handleStarFilters={handleStarFilters}
              handleReviewAverage={handleReviewAverage}
            />
          </div>
          <div className={styles.parentHeader} style={{ display: 'flex' }}>
            <div style={{ alignSelf: 'center', paddingLeft: '20px' }}>
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
              charObject={charObject}
            />
          </div>
        </div>
      )
      : null
  );
};

export default Reviews;
