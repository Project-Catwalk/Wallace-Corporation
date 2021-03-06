import React, { useState, useEffect } from 'react';
import StarRating from '../StarRating';
import styles from '../../styleComponents/Reviews.module.css';

const RatingBreakdown = ({ reviews, metaReviews }) => {
  const { ratings, recommend, characteristics } = metaReviews;
  const [average, setAverage] = useState();
  const [starBreakdown, setStarBreakdown] = useState({
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
  });
  const [breakdownChars, setBreakdownChars] = useState(characteristics);
  const [total, setTotal] = useState(0);

  Object.assign(starBreakdown, ratings);

  const getTotal = (x) => {
    if (x) {
      const total = Object.values(x).reduce((z, y) => {
        return z += Number(y)}
        , 0);
      setTotal(total);
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
  }, [metaReviews]);

  return (
    <div>
      <h3>Ratings & Reviews</h3>
      <StarRating average={average} />
      <h1>{`${(average / 20)}/5` }</h1>
      <h4>
        Rating Breakdown: (out of {total}
        )
      </h4>
      {Object.entries(starBreakdown).map((star) => {
        const avg = (Number(star[1]) / 12) * 100;
        return (
          <div key={star[0]}>
            <span>
              {star[0]} 
              Star
            </span>
            <progress id="file" max="100" value={avg} />
            <span>{star[1]}</span>
            <br />
          </div>
        );
      })}
      {Object.entries(metaReviews).map((char) => {
        if (char[0] === 'characteristics') {
          return Object.entries(char[1]).map((x) => {
            const value = (x[1].value / 5) * 100;
            return (
              <div key={x[0]}>
                <div>{x[0]}</div>
                <progress id="file" max="100" value={value} />
                <br />
              </div>
            );
          });
        }
      })}
    </div>
  );
};

export default RatingBreakdown;
