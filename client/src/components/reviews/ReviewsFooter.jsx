import React, { useState } from 'react';
// import axios from "axios";
import styles from '../../styleComponents/Reviews.module.css';
import ReviewsModal from './ReviewModal';

const ReviewsFooter = ({ productId, getReviews, name, metaReviews }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button className={styles.footerButton} type="submit">More Reviews</button>
      <button className={styles.footerButton} type="submit" onClick={() => setIsOpen(true)}>Add Review</button>
      <ReviewsModal
        productId={productId}
        getReviews={getReviews}
        onClose={() => setIsOpen(false)}
        open={isOpen}
        name={name}
        metaReviews={metaReviews}
      />
    </div>
  );
};

export default ReviewsFooter;
