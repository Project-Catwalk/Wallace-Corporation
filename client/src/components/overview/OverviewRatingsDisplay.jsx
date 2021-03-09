import React, { useRef } from 'react';
import styles from '../../styleComponents/Overview.module.css';
import RatingBreakdown from '../reviews/RatingBreakdown';
import StarRating from '../StarRating';

const ReviewStars = (props) => {
  // STILL TO DO:

  // Reset imputRef to the top of Luci's section
  const { average } = props;

  const inputRef = useRef();
  // const inputRef = React.createRef();

  const handleClick = () =>
    inputRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

  return (
    <>
      <StarRating average={average} />
      <button type="submit" className={styles.reviewsButton} ref={inputRef} onClick={handleClick}>Read all reviews</button>
    </>
  );
};

export default ReviewStars;
