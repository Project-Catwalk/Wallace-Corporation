import React, { useState, useEffect } from 'react';
import StarRating from '../StarRating';
import styles from '../../styleComponents/Reviews.module.css';

const RatingBreakdown = ({ reviews, metaReviews }) => {
  const { ratings, recommended, characteristics } = metaReviews;
  const [average, setAverage] = useState();
  const [starBreakdown, setStarBreakdown] = useState({
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
  });
  const [total, setTotal] = useState(0);
  const [recommend, setRecommend] = useState(0);

  Object.assign(starBreakdown, ratings);

  const getTotal = (obj) => {
    if (obj) {
      const ratingTotal = Object.values(obj).reduce((z, y) => {
        return z += Number(y)},
      0);
      setTotal(ratingTotal);
    }
  };

  const getRecommended = (obj) => {
    if (obj) {
      const percentRecommended =
        Math.round((Number(obj.true) / (Number(obj.true) + Number(obj.false))) * 100);
      setRecommend(percentRecommended);
    }
  };

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

  useEffect(() => {
    averageRating();
    Object.assign(starBreakdown, ratings);
    getTotal(ratings);
    getRecommended(recommended);
  }, [metaReviews]);

  return (
    <div className={styles.breakdownGrid}>
      <h4 className={styles.breakdownHeader}>Ratings & Reviews</h4>
      <div className={styles.breakdownStars} style={{ justifySelf: 'left' }}>
        <StarRating average={average} />
      </div>
      <h1 className={styles.breakdownTotal}>{`${(average / 20).toFixed(1)}` }</h1>
      <h4 className={styles.breakdownRecommended}>{recommend}% recommend this product</h4>
      <h4 className={styles.breakdownSubheader}>
        Rating Breakdown: (out of {total} reviews)
      </h4>
      <div className={styles.breakdownStarBreakdown}>
        {Object.entries(starBreakdown).map((star) => {
          const avg = (Number(star[1]) / 12) * 100;
          return (
            <div key={star[0]}>
              <span style={{ fontStyle: 'italic' }}>
                {star[0]} Star
              </span>
              <div className={styles.progressContainer}>
                <div className={styles.progressbar} style={{ width: avg }} />
              </div>
              <span>{star[1]}</span>
              <br />
            </div>
          );
        })}
      </div>
      <div className={styles.breakdownCharacteristics}>
        {Object.entries(metaReviews).map((char) => {
          if (char[0] === 'characteristics') {
            return Object.entries(char[1]).map((x) => {
              const value = (x[1].value / 5) * 100;
              return (
                <div key={x[0]} className={styles.breakdownCharacteristics}>
                  <div style={{ fontStyle: 'italic' }}>{x[0]}</div>
                  <div className={styles.progressContainer}>
                    <div className={styles.progressbar} style={{ width: value }} />
                  </div>
                  <br />
                </div>
              );
            });
          }
        })}
      </div>
    </div>
  );
};

export default RatingBreakdown;
