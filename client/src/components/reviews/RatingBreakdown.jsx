import React, { useState, useEffect } from 'react';
import StarRating from '../StarRating';
// import axios from "axios";
// import styles from '../styleComponents/Reviews.module.css';

const RatingBreakdown = ({ reviews, metaReviews }) => {
  const { rating, recommend, characteristics } = metaReviews;
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

  const totalReviews = reviews.length;

  useEffect(() => averageRating());

  return (
    <div>
      <h3>Ratings & Reviews</h3>
      <StarRating average={average} />
      <h1>{`${(average / 20)}/5` }</h1>
      <h4>Rating Breakdown:</h4>
      <div>{rating}</div>
      {/* {rating.map((star) => <div>{star[0]}</div>)} */}
    </div>
  );
};

export default RatingBreakdown;

