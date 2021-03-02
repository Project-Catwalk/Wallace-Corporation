import React from "react";
import axios from "axios";
import styles from '../styleComponents/Reviews.module.css';

const RatingBreakdown = ({ reviews }) => {
  const averageRating = () => {
    const reducedRating = reviews.reduce((acc, review) => {
      const roundedPercentage = (Math.round((review.rating / 5) * 4) / 4).toFixed(2);
      const starPercentage = roundedPercentage * 100;
      const x = acc + starPercentage;
      return x / (reviews.length-1);
    }, 0);
    const roundedPercent = (Math.round((reducedRating / 100) * 4) / 4).toFixed(2);
    return roundedPercent * 100;
  };
 
  return (
    <div className={styles.starRating}>
      <div className={styles.starRatingTop} style={{width: averageRating()}}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
      <div className={styles.starRatingBottom}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
    </div>
  );
};

export default RatingBreakdown;
