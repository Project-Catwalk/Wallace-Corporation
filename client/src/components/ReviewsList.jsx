import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReviewTemplate from './ReviewTemplate';

const ReviewsList = ({ productId }) => {
  const [reviews, setReviews] = useState([]);
  console.log(reviews);
  const getReviews = (id) => {
    axios
      .get(`/reviews/${id}`)
      .then(({ data }) => setReviews(data))
      .catch((err) => console.log(err));
  };
  useEffect(() => getReviews(productId), [productId]);

  return (
    <div>
      <ReviewTemplate reviews={reviews} />
    </div>
  );
};

export default ReviewsList;
