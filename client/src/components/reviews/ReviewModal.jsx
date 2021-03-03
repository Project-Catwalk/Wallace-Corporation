import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
// import styles from '../../styleComponents/App.module.css';
import Rstyles from '../../styleComponents/Reviews.module.css';
import styles from '../../styleComponents/App.module.css';

const ReviewsModal = ({
  productId, onClose, open, getReviews, name, metaReviews,
}) => {
  const [review, setReview] = useState({
    product_id: productId,
    rating: 0,
    summary: '',
    body: '',
    recommend: false,
    name: '',
    email: '',
    photos: [],
    characteristics: metaReviews
  });
  const [characteristics, setCharacteristics] = useState([]);
  console.log(metaReviews)

  useEffect(() => {
    setCharacteristics(metaReviews.characteristics);
  }, [metaReviews]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(review);
    // axios.post('/reviews', review)
    //   .then(() => getReviews(productId))
    //   .catch(console.log);
  };

  return ReactDOM.createPortal(
    <>
      <div 
        onClick={onClose} 
        className={open ? styles.overlay : ''}
      ></div>
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
          <div
            className={styles.closeModal}
            onClick={onClose}
          >
            x
          </div>
        </div>
        <div className={styles.modalBody}>
          <form onSubmit={(e) => handleSubmit(e)} action="">
            <p>Overall Rating:</p>
            <div className={Rstyles.starRating}>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
            <p>Would you recommend this product?</p>
            <div>
              <input type="radio" id="Yes" name="recommend" value="true" />
              <label htmlFor="Yes">Yes</label>
            </div>
            <div>
              <input type="radio" id="No" name="recommend" value="false" />
              <label htmlFor="No">No</label>
            </div>
            {/* {for ( let key in metaReviews.characteristics) <div>{key}</div>
            } */}
            <p>Review Title:</p>
            <input
              onChange={(e) => setReview({ summary: e.target.value })}
              className={Rstyles.modalInput}
              maxLength="60"
              placeholder="Example: Best purchase ever!"
              type="text"
            />
            <textarea
              onChange={(e) => setReview({ body: e.target.value })}
              minLength="50"
              maxLength="1000"
              className={styles.qInput}
              placeholder="Why did you like the product or not?"
              type="text"
            />
            <p>What is your nickname?</p>
            <input
              onChange={(e) => setReview({ name: e.target.value })}
              className={Rstyles.modalInput}
              maxLength="60"
              type="text"
              placeholder="Example: jackson11!"
            />
            <p>What is your email?</p>
            <input
              onChange={(e) => setReview({ email: e.target.value })}
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
    </>,
    document.getElementById('modal'),
  );
};

export default ReviewsModal;
