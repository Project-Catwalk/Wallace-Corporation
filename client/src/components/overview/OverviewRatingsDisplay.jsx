import React from 'react';
import styles from '../../styleComponents/Overview.module.css';
import StarRating from '../StarRating';

const ReviewStars = (props) => {
  const { average } = props;

  const inputRef = document.getElementById('scrollTarget');

  const handleClick = () => {
    if (inputRef !== null) {
      inputRef.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <>
      <StarRating average={average} />
      <button type="submit" className={styles.reviewsButton} ref={inputRef} onClick={handleClick}>Read all reviews</button>
    </>
  );
};

export default ReviewStars;
