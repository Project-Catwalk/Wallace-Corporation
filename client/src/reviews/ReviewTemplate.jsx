import React from 'react';
// import axios from "axios";
import styles from '../styleComponents/Reviews.module.css';
import Helpful from '../components/Helpful';

const ReviewTemplate = ({ reviews }) => (
  <div>
    {reviews.map((review, id) => (
      <div key={id} className={styles.reviewTemplate}>
        <StarRating rating={review.rating} />
        <div className={styles.templateSummary}>{review.summary}</div>
        <div className={styles.templateBody}>{review.body}</div>
        <div className={styles.templateUserDateBar}>
          <UserDateBar review={review} />
        </div>
        <div className={styles.templateHelpfulReportBar}>
          <Helpful review_id={review.review_id} helpfulness={review.helpfulness} />
        </div>
        {(review.response.length > 0)
          ? <div className={styles.templateResponseFromSeller}>{review.response}</div>
          : <div />}
        {/* // <div className={styles.templateResponseFromSeller}>{review.response}</div> */}
        {/* {(review.photos.length > 0)
          ? <div className={styles.templateImages}>{review.photos}</div>
          : <div />} */}
        {/* <div className={styles.templateImages}>{review.photos}</div> */}
        {(review.recommend)
          ? <div className={styles.templateRecommendsBar}>I recommend this product</div>
          : <div />}
      </div>
    ))}
  </div>
);

const StarRating = ({ rating }) => {
  const roundedPercentage = (Math.round((rating / 5) * 4) / 4).toFixed(2);
  const starPercentage = roundedPercentage * 100;
  console.log(rating)
  return (
    <div className={styles.starRating}>
      <div className={styles.starRatingTop} style={{width: starPercentage}}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
      <div className={styles.starRatingBottom}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
    </div>
  );
};

const UserDateBar = ({ review }) => {
  const getDate = (date) => {
    const dateArr = date.slice(0, date.indexOf('T')).split('-');
    const year = dateArr.shift();
    dateArr.push(year);
    return dateArr.join('-');
  };

  const date = getDate(review.date);

  return (
    <div>
      <div className={styles.userDateBar}>{review.reviewer_name}</div>
      <div className={styles.userDateBar}>{date}</div>
    </div>
  );
};

export default ReviewTemplate;
