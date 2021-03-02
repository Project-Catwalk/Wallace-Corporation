import React, { useState, useEffect } from 'react';
import ReviewTemplate from './ReviewTemplate';
import styles from '../styleComponents/Reviews.module.css';

const ReviewsList = ({ reviews }) => {
  // const initialReviews = reviews.slice(0, 2);

  return (
    <div>
      <ReviewTemplate reviews={reviews} />
    </div>
  );
};

export default ReviewsList;
