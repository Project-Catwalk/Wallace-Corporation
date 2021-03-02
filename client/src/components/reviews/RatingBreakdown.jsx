import React, { useState, useEffect } from 'react';
import StarRating from '../StarRating';
// import axios from "axios";
// import styles from '../styleComponents/Reviews.module.css';

const RatingBreakdown = ({ reviews }) => {
  const [average, setAverage] = useState();

  const averageRating = () => {
    const reducedRating = reviews.reduce((acc, review) => {
      const total = acc + (review.rating / 5) * 100;
      return total;
    }, 0);
    const temp = reducedRating / reviews.length;
    const roundedAvg = (Math.round(temp));
    const avg = Math.round(roundedAvg / 5) * 5;
    setAverage(avg);
  };

  useEffect(() => averageRating());

  return (
    <div>
      <h3>Ratings & Reviews</h3>
      <StarRating average={average} />
    </div>
  );
};
export default RatingBreakdown;
