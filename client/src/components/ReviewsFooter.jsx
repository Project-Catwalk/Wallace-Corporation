import React, { useState } from "react";
import axios from "axios";
import styles from '../styleComponents/Reviews.module.css';

const ReviewsFooter = ({ productId }) => {
  const [ seeMore, setSeeMore ] = useState(false);

  return(
    <div>
      <button className={styles.footerButton} type="text">More Reviews</button>
      <button className={styles.footerButton} type="text">Add Review</button>
    </div>
  );
};

export default ReviewsFooter;
