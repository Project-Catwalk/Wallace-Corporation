import React, { useState, useEffect } from 'react';
import StarRating from '../StarRating';
import styles from '../../styleComponents/Reviews.module.css';

const RatingBreakdown = ({
  reviews, metaReviews, handleStarFilters, handleReviewAverage, charObject
}) => {
  const { ratings, recommended, characteristics } = metaReviews;
  const [average, setAverage] = useState();
  const [starFilters, setStarFilters] = useState([]);
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
    handleReviewAverage(avg);
  };

  const handleFilters = (star) => {
    const currentFilters = starFilters;
    currentFilters.push(star);
    setStarFilters(currentFilters);
    handleStarFilters(starFilters);
  };

  const removeFilters = () => {
    setStarFilters([]);
    handleStarFilters([]);
  };

  useEffect(() => {
    averageRating();
    Object.assign(starBreakdown, ratings);
    getTotal(ratings);
    getRecommended(recommended);
  }, [metaReviews]);

  return (
    (metaReviews && average)
      ? (
        <div className={styles.breakdownGrid}>
          <h4 id="scrollTarget" className={styles.breakdownHeader}>Ratings & Reviews</h4>
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
                  <span
                    className={styles.starCount}
                    role="presentation"
                    onKeyDown={handleFilters}
                    onClick={() => {
                      handleFilters(star[0]);
                    }}
                  >
                    {star[0]} Star
                  </span>
                  <div className={styles.progressContainer}>
                    <div className={styles.progressbar} style={{ width: avg }} />
                  </div>
                  <span style={{ fontStyle: 'italic' }}>{star[1]}</span>
                  <br />
                </div>
              );
            })}
            {starFilters.length > 0
              ? (
                <div className={styles.comment}>
                  <span>Current Filters:</span>
                  {starFilters.map((x) => <span style={{ padding: '5px' }} key={x}>{x} Stars</span>)}
                  <br />
                  <span
                    role="presentation"
                    onKeyDown={removeFilters}
                    className={styles.starCount}
                    onClick={removeFilters}
                  >
                    Remove all filters
                  </span>
                </div>
              )
              : null}
          </div>
          <div className={styles.breakdownCharacteristics}>
            {Object.entries(metaReviews).map((char) => {
              if (char[0] === 'characteristics') {
                return Object.entries(char[1]).map((x) => {
                  const value = (x[1].value / 5) * 100;
                  return (
                    <div key={x[0]} className={styles.breakdownCharacteristics} style={{ margin: '0' }}>
                      <div style={{ fontStyle: 'italic', margin: '2px' }}>{x[0]}</div>
                      <div className={styles.progressContainer}>
                        <div className={styles.progressbar} style={{ width: value }} />
                      </div>
                      <div style={{ display: 'flex', width: '90%', justifyContent: 'space-between' }}>
                        <span className={styles.comment}>(1) {charObject[x[0]][1]}</span>
                        <span className={styles.comment}>(5) {charObject[x[0]][5]}</span>
                      </div>
                      <br />
                    </div>
                  );
                });
              }
            })}
          </div>
        </div>
      )
      : null
  );
};

export default RatingBreakdown;
