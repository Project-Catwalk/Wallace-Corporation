import React from 'react';
import styles from '../styleComponents/Reviews.module.css';

const StarRating = ({ reviews }) => {
  const averageRating = () => {
    const reducedRating = reviews.reduce((acc, review) => {
      const total = acc + (review.rating / 5) * 100;
      return total;
    }, 0);
    const average = reducedRating / reviews.length;
    const roundedAvg = (Math.round(average));
    const avg = Math.round(roundedAvg / 5) * 5;
    return avg;
  };

  return (
    <div className={styles.starRating}>
      <div className={styles.starRatingTop} style={{ width: averageRating() }}>
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
};

export default StarRating;
