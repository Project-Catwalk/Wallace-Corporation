import React, { useState, useEffect } from 'react';
import styles from '../../styleComponents/Reviews.module.css';
import Helpful from '../Helpful';

const ReviewTemplate = ({ review }) => (
  <div>
    <div className={styles.reviewTemplate}>
      <StarRating rating={review.rating} />
      <div className={styles.templateSummary}>{review.summary}</div>
      <div className={styles.templateBody}>{review.body}</div>
      <div className={styles.templateUserDateBar}>
        <UserDateBar review={review} />
      </div>
      <div className={styles.templateHelpfulReportBar}>
        <Helpful review_id={review.review_id} helpfulness={review.helpfulness} />
      </div>
      {(review.response)
        ? <div className={styles.templateResponseFromSeller}>{review.response}</div>
        : null}
      <div className={styles.templateImages}>
        {(review.photos.length > 0)
          ? review.photos.map((photo, id) => <img src={photo.url} alt="review" className={styles.imgThumbnail} key={id} />)
          : null}
      </div>
      {(review.recommend)
        ? <div className={styles.templateRecommendsBar}>I recommend this product</div>
        : <div />}
    </div>
  </div>
);

const StarRating = ({ rating }) => {
  const starPercentage = (rating / 5) * 100;
  const roundedPercentage = (Math.round(starPercentage * 5) / 5);

  return (
    <div className={styles.starRating}>
      <div className={styles.starRatingTop} style={{ width: roundedPercentage }}>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
      </div>
      <div className={styles.starRatingBottom}>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
      </div>
    </div>
  );
};

const UserDateBar = ({ review }) => {
  const getDate = (date) => {
    const dateArr = date.slice(0, date.indexOf('T')).split('-');
    const year = dateArr.shift();
    dateArr.push(year);
    return dateArr.join('-');
  };

  const date = getDate(review.date);

  return (
    <div>
      <div className={styles.userDateBar}>{review.reviewer_name}</div>
      <div className={styles.userDateBar}>{date}</div>
    </div>
  );
};
export default ReviewTemplate;

//         {/* {(review.photos.length > 0)
//           ? <div className={styles.templateImages}>{review.photos.url}</div>
//           : null} */}
