import React from 'react';
// import axios from "axios";
import styles from '../styleComponents/Reviews.module.css';

const ReviewTemplate = ({ reviews }) => (
  <div>
    {reviews.map((review, id) => (
      <div key={id} className={styles.reviewTemplate}>
        <div className={styles.templateRating}>{review.rating}</div>
        <div className={styles.templateSummary}>{review.summary}</div>
        <div className={styles.templateBody}>{review.body}</div>
        {/* <div className={styles.templateUserDateBar}>{review.response}</div> */}
        <div className={styles.templateResponseFromSeller}>{review.response}</div>
        {/* <div className={styles.templateHelpfulReportBar}>{review.summary}</div> */}
        {/* <div className={styles.templateImages}>{review.photos}</div> */}
        <div className={styles.templateRecommendsBar}>{review.recommend}</div>
      </div>
    ))}
  </div>
);

export default ReviewTemplate;
