import React, {useState, useEffect} from 'react';
// import axios from "axios";
import styles from '../styleComponents/Reviews.module.css';
import Helpful from './Helpful';

const ReviewTemplate = ({ reviews }) => (
  <div>
    {reviews.map((review, id) => (
      <div key={id} className={styles.reviewTemplate}>
        <div className={styles.templateRating}>{review.rating}</div>
        <div className={styles.templateSummary}>{review.summary}</div>
        <div className={styles.templateBody}>{review.body}</div>
        <div className={styles.templateUserDateBar}>
          <UserDateBar review={review} />
        </div>
        <div className={styles.templateHelpfulReportBar}>
          <Helpful review={review} />
        </div>
        <div className={styles.templateResponseFromSeller}>{review.response}</div>
        {/* <div className={styles.templateImages}>{review.photos}</div> */}
        <div className={styles.templateRecommendsBar}>{review.recommend}</div>
      </div>
    ))}
  </div>
);

const UserDateBar = ({ review }) => (
  <div>
    <div>{review.reviewer_name}</div>
    <div>{review.date}</div>
  </div>
);

export default ReviewTemplate;
