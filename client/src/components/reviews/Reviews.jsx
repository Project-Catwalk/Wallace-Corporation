import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RatingBreakdown from './RatingBreakdown';
import ReviewsList from './ReviewsList';
import ReviewsSortHeader from './ReviewsSortHeader';
import ReviewsFooter from './ReviewsFooter';
import styles from '../../styleComponents/Reviews.module.css';

const Reviews = ({ reviews, getReviews, productId, name, metaReviews, characteristics }) => (
  <div className={styles.parentContainer}>
    <div className={styles.parentBreakdown}>
      <RatingBreakdown
        reviews={reviews}
        metaReviews={metaReviews}
      />
    </div>
    <div className={styles.parentHeader}>
      <ReviewsSortHeader />
    </div>
    <div className={styles.parentIndividualReview}>
      <ReviewsList reviews={reviews} />
    </div>
    <div className={styles.parentFooter}>
      <ReviewsFooter
        getReviews={getReviews}
        productId={productId}
        name={name}
        metaReviews={metaReviews}
        characteristics={characteristics}
      />
    </div>
  </div>
);

export default Reviews;
