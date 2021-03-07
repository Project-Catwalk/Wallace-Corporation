import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Rstyles from '../../styleComponents/Reviews.module.css';
import styles from '../../styleComponents/App.module.css';
import Characteristics from './Characteristics';

const ReviewsModal = ({
  productId, onClose, open, getReviews, name, metaReviews, charObject
}) => {
  const [review, setReview] = useState({
    product_id: productId,
    rating: 0,
    summary: '',
    body: '',
    recommend: '',
    name: '',
    email: '',
    photos: [],
    characteristics: {},
  });
  const [thumbnails, setThumbnails] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalReview = { ...review };
    const promises = [];
    
    for (const photo of finalReview.photos) {
      const payload = {
        name: photo.name,
        data: '',
      } 

    const promise = toBase64(photo)
        .then((result) => payload.data = result.split(',')[1])
        .then(() => axios.post(`/upload_images`, payload))
        .then(({data}) => {return data})
        .catch(console.log);
      promises.push(promise);
    }

    Promise.all(promises)
      .then((results) => {
        finalReview.photos = results;
      })
      .then(() => axios.post('/reviews', finalReview))
      .then(() => getReviews(productId))
      .catch(console.log);
  };

  const handleChange = (e) => {
    if (review.photos.length < 5) {
      setReview({
        ...review,
        photos: [...review.photos, e.target.files[0]],
      });
      setThumbnails([
        ...thumbnails,
        URL.createObjectURL(e.target.files[0]),
      ]);
    }
  };

  const toBase64 = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

  const clearForm = () => {
    setReview({
      product_id: productId,
      rating: 0,
      summary: '',
      body: '',
      recommend: '',
      name: '',
      email: '',
      photos: [],
      characteristics: {},
    });
  };

  return (
    (metaReviews && review && review.photos)
      ? (
        <>
          <div
            role="presentation"
            onClick={() => {
              onClose();
              clearForm();
            }}
            className={open ? styles.overlay : ''}
          />
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
                role="presentation"
                className={styles.closeModal}
                onClick={() => {
                  onClose();
                  clearForm();
                }}
              >
                x
              </p>
            </div>
            <div className={styles.modalBody}>
              <form
                onSubmit={(e) => {
                  handleSubmit(e);
                  onClose();
                }}
                action=""
              >
                <p>Overall Rating:</p>
                <div className={Rstyles.starRating}>
                  <span
                    role="presentation"
                    onKeyDown={() => setReview({ ...review, rating: 1 })}
                    onClick={() => setReview({ ...review, rating: 1 })}
                  >
                    ★
                  </span>
                  <span
                    role="presentation"
                    onKeyDown={() => setReview({ ...review, rating: 2 })}
                    onClick={() => setReview({ ...review, rating: 2 })}
                  >
                    ★
                  </span>
                  <span
                    role="presentation"
                    onKeyDown={() => setReview({ ...review, rating: 3 })}
                    onClick={() => setReview({ ...review, rating: 3 })}
                  >
                    ★
                  </span>
                  <span
                    role="presentation"
                    onKeyDown={() => setReview({ ...review, rating: 4 })}
                    onClick={() => setReview({ ...review, rating: 4 })}
                  >
                    ★
                  </span>
                  <span
                    role="presentation"
                    onKeyDown={() => setReview({ ...review, rating: 5 })}
                    onClick={() => setReview({ ...review, rating: 5 })}
                  >
                    ★
                  </span>
                </div>
                <p>Would you recommend this product?</p>
                <div>
                  <input type="radio" id="Yes" name="recommend" onClick={() => setReview({ ...review, recommend: true })} />
                  <label htmlFor="Yes">Yes</label>
                  <input type="radio" id="No" name="recommend" onClick={() => setReview({ ...review, recommend: false })} />
                  <label htmlFor="No">No</label>
                </div>
                <Characteristics
                  characteristics={metaReviews.characteristics}
                  charObject={charObject}
                  setReview={setReview}
                  review={review}
                />
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
                <div>
                  {review.photos.length < 5 ? <input value={''} onChange={handleChange} type="file" /> : null}
                  {thumbnails.map((photo) => <img key={photo} className={`${Rstyles.imgThumbnail} ${Rstyles.reviewPhoto}`} src={photo} />)}
                </div>
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
      )
      : null
  );
};

export default ReviewsModal;
