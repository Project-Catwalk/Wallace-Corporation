import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReviewTemplate from './ReviewTemplate';

const ReviewsList = ({ productId }) => {
  const [reviews, getReviews] = useState({});

  useEffect(() => getProductReviews(productId));
  const getProductReviews = (id) => {
    axios.get(`/reviews/${id}`).then(({ data }) => console.log(data)).catch(console.log);
  };

  return (
    <div>
      <ReviewTemplate />
      <ReviewTemplate />
    </div>
  );
};

export default ReviewsList;
