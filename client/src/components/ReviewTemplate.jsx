import React from 'react';
// import axios from "axios";
import styles from '../styleComponents/Reviews.module.css';

const ReviewTemplate = () => {
  return(
  <div className={styles.reviewTemplate}>
    <div className={styles.templateRating}>Star rating</div>
    <div className={styles.templateSummary}>Summary</div>
    <div className={styles.templateUserDateBar}>Body</div>
    <div className={styles.templateBody}>Helpful/Report bar</div>
    <div className={styles.templateResponseFromSeller}>Response from seller</div>
    <div className={styles.templateHelpfulReportBar}>User/date bar</div>
    <div className={styles.templateImages}>Images</div>
    <div className={styles.templateRecommendsBar}>Recommends?</div>
  </div>
  );
};

export default ReviewTemplate;
