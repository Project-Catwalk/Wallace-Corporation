import React from 'react';
import styles from '../styleComponents/Reviews.module.css';

const StarRating = ({ average }) => (
  <div className={styles.starRating}>
    <div className={styles.starRatingTop} style={{ width: average() }}>
      <span>★</span>
      <span>★</span>
      <span>★</span>
      <span>★</span>
      <span>★</span>
    </div>
    <div className={styles.starRatingBottom}>
      <span>★</span>
      <span>★</span>
      <span>★</span>
      <span>★</span>
      <span>★</span>
    </div>
  </div>
);

export default StarRating;
