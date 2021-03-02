import React from 'react';
import StarRating from '../StarRating';
// import axios from "axios";
// import styles from '../styleComponents/Reviews.module.css';

const RatingBreakdown = ({ reviews }) => {
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
    <div>
      <h3>Ratings & Reviews</h3>
      <StarRating average={averageRating} />
    </div>
  );
};
export default RatingBreakdown;
