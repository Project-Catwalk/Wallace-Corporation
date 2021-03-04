import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
// import styles from '../../styleComponents/App.module.css';
import Rstyles from '../../styleComponents/Reviews.module.css';
import styles from '../../styleComponents/App.module.css';
import Characteristics from './Characteristics';

const ReviewsModal = ({
  productId, onClose, open, getReviews, name, metaReviews,
}) => {
  const [review, setReview] = useState({
    product_id: '',
    rating: 0,
    summary: '',
    body: '',
    recommend: '',
    name: '',
    email: '',
    photos: [],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setReview({ ...review, product_id: productId });
    const finalReview = { ...review };
    // axios.post('/reviews', review)
    //   .then(() => getReviews(productId))
    //   .catch(console.log);
  };

  return (
    <>
      <div 
        onClick={() => {
          onClose();
          clearForm();
        }} 
        className={open ? styles.overlay : ''}
      >
      </div>
      <div
        style={{
          transform: open ? 'translate(-50%, -50%)' : 'translate(-50%, -150vh)',
        }}
        className={styles.modal}
      >
        <div className={styles.modalHeader}>
          <h3>Write Your Review</h3>
          <h4>
            About the {name}
            ...
          </h4>
          <p 
            className={styles.closeModal} 
            onClick={() => {
              onClose();
              clearForm();
            } }
          >
            x
          </p>
        </div>
        <div className={styles.modalBody}>
          <form onSubmit={(e) => handleSubmit(e)} action="">
            <p>Overall Rating:</p>
            <div className={Rstyles.starRating}>
              <span onClick={() => setReview({ rating: 1 })}>★</span>
              <span onClick={() => setReview({ rating: 2 })}>★</span>
              <span onClick={() => setReview({ rating: 3 })}>★</span>
              <span onClick={() => setReview({ rating: 4 })}>★</span>
              <span onClick={() => setReview({ rating: 5 })}>★</span>
            </div>
            <p>Would you recommend this product?</p>
            <div>
              <input type="radio" id="Yes" name="recommend" onClick={() => setReview({ ...review, recommend: true })} />
              <label htmlFor="Yes">Yes</label>
              <input type="radio" id="No" name="recommend" onClick={() => setReview({ ...review, recommend: false })} />
              <label htmlFor="No">No</label>
            </div>
            <Characteristics metaReviews={metaReviews} />
            <p>Review Title:</p>
            <input
              onChange={(e) => setReview({ ...review, summary: e.target.value })}
              className={Rstyles.modalInput}
              maxLength="60"
              placeholder="Example: Best purchase ever!"
              type="text"
            />
            <textarea
              onChange={(e) => setReview({ ...review, body: e.target.value })}
              minLength="50"
              maxLength="1000"
              className={styles.qInput}
              placeholder="Why did you like the product or not?"
              type="text"
            />
            <p>What is your nickname?</p>
            <input
              onChange={(e) => setReview({ ...review, name: e.target.value })}
              className={Rstyles.modalInput}
              maxLength="60"
              type="text"
              placeholder="Example: jackson11!"
            />
            <p>What is your email?</p>
            <input
              onChange={(e) => setReview({ ...review, email: e.target.value })}
              className={Rstyles.modalInput}
              maxLength="60"
              type="text"
              placeholder="Example: jackson11@email.com"
            />
            <div />
            <button
              type="submit"
              className={styles.modalButton}
            >
              Submit Review
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ReviewsModal;
