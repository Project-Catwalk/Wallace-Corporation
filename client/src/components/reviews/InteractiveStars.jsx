import React, { useState } from 'react';
import styles from '../../styleComponents/Reviews.module.css';

const InteractiveStars = ({ review, setReview }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [value, setValue] = useState('');

  const descriptionObj = {
    1: 'Poor',
    2: 'Fair',
    3: 'Average',
    4: 'Good',
    5: 'Great',
  };

  const handleValue = (index) => {
    setValue(descriptionObj[index]);
  };

  return (
    <div required="required">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={`${index <= (hover || rating) ? styles.on : styles.off} ${styles.button}`}
            onClick={() => {
              setRating(index);
              handleValue(index);
            }}
            onMouseEnter={() => {
              setRating(rating);
              setReview({ ...review, rating: index });
            }}
            onMouseLeave={() => setHover(rating)}
          >
            <span>★</span>
          </button>
        );
      })}
      <p style={{ margin: '5px', fontSize: '12px', fontStyle: 'italic' }}>{value}</p>
    </div>
  );
};

export default InteractiveStars;
