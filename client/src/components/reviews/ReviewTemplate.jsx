import React, { useState, useEffect } from 'react';
import styles from '../../styleComponents/Reviews.module.css';
import Helpful from '../Helpful';

const ReviewTemplate = ({ review }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={expanded ? styles.overlayPhoto : ''} onClick={() => (expanded) ? setExpanded(!expanded) : null }>
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
        {(review.response && review.response !== 'null')
          ? <div className={styles.templateResponseFromSeller}>{review.response}</div>
          : null}
        <div className={styles.templateImages}>
          {(review.photos.length > 0)
            ? review.photos.map((photo, id) => (
              (!expanded)
                ? (
                  <img
                    role="presentation"
                    src={photo.url}
                    alt="review"
                    className={styles.imgThumbnail}
                    key={id}
                    onClick={() => setExpanded(!expanded)}
                    onKeyDown={() => setExpanded(!expanded)}
                  />
                )
                : (
                  <img
                    role="presentation"
                    src={photo.url}
                    alt="review"
                    className={styles.photo}
                    key={id}
                    onClick={() => setExpanded(!expanded)}
                    onKeyDown={() => setExpanded(!expanded)}
                  />
                )
            ))
            : null}
        </div>
        {(review.recommend)
          ? (
            <div className={styles.templateRecommendsBar}>
              &#10003; Yes, I recommend this product
            </div>
          )
          : <div />}
      </div>
    </div>
  );
};

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
      <span style={{fontSize: 10, fontStyle: 'italic'}}>&#10003; Verified Purchaser</span>
      <div className={styles.userDateBar}>{review.reviewer_name}</div>
      <div className={styles.userDateBar}>{date}</div>
    </div>
  );
};
export default ReviewTemplate;
