import React from 'react';
import axios from 'axios';
import RatingBreakdown from './RatingBreakdown';
import ReviewsList from './ReviewsList';
import ReviewsSortHeader from './ReviewsSortHeader';
import ReviewsFooter from './ReviewsFooter';
import styles from '../styleComponents/Reviews.module.css';

const Reviews = ({ productId }) => (
  <div className={styles.container}>
    <div className={styles.breakdown}>
      <RatingBreakdown />
    </div>
    <div className={styles.header}>
      <ReviewsSortHeader />
    </div>
    <div className={styles.individualReview}>
      <ReviewsList />
    </div>
    <div className={styles.footer}>
      <ReviewsFooter />
    </div>
  </div>
);

export default Reviews;
