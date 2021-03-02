import React, { useState } from 'react';
// import axios from "axios";
import styles from '../../styleComponents/Reviews.module.css';

const ReviewsFooter = ({ productId }) => {
  const [ seeMore, setSeeMore ] = useState(false);

  return (
    <div>
      <button className={styles.footerButton} type="submit">More Reviews</button>
      <button className={styles.footerButton} type="submit">Add Review</button>
    </div>
  );
};

export default ReviewsFooter;
