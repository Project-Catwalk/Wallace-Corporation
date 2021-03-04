import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RatingBreakdown from './RatingBreakdown';
import ReviewsList from './ReviewsList';
import ReviewsSortHeader from './ReviewsSortHeader';
import ReviewsFooter from './ReviewsFooter';
import styles from '../../styleComponents/Reviews.module.css';

const Reviews = ({ reviews, getReviews, productId, name, metaReviews, characteristics }) => {


  // useEffect(() => {
  //   getReviews(20100),
  //   getMetaReviews(20100)
  // })

  // const getReviews = (id) => {
  //     axios.get(`/reviews/${id}`)
  //       .then(({ data }) => {
  //         this.setState({
  //           reviews: data,
  //         });
  //       })
  //       .catch(console.log);
  // }

  // const getMetaReviews = (id) => {
  // axios.get(`/reviews/meta/${id}`)
  //   .then(({ data }) => {
  //     this.setState({
  //       metaReviews: Object.entries(data.characteristics),
  //     });
  //   })
  //   .catch((err) => console.log(err));
  // }

  return (
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
  )
};

export default Reviews;
