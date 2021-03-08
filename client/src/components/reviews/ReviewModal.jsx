import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Rstyles from '../../styleComponents/Reviews.module.css';
import styles from '../../styleComponents/App.module.css';
import Characteristics from './Characteristics';
import InteractiveStars from './InteractiveStars';

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
  const [error, setError] = useState('');
  const [characterCount, setCharacterCount] = useState(50);

  const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );

  const toBase64 = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalReview = { ...review };
    const promises = [];

    if (!validEmailRegex.test(finalReview.email)) {
      setError('*You must enter a valid email');
      return;
    } 

    finalReview.photos.map((photo) => {
      const payload = {
        name: photo.name,
        data: '',
      };
      const promise = toBase64(photo)
        .then((result) => payload.data = result.split(',')[1])
        .then(() => axios.post('/upload_images', payload))
        .then(({ data }) => data)
        .catch(console.log);
      promises.push(promise);
      Promise.all(promises)
        .then((results) => {
          finalReview.photos = results;
        })
        .then(() => axios.post('/reviews', finalReview))
        .then(() => getReviews(productId))
        .then(() => onClose())
        .catch(console.log);
    });
  };

  const handleCountChange = (e) => {
    const { value } = e.target;
    (value.length === (50 - characterCount + 1))
    ? setCharacterCount(characterCount - 1)
    : setCharacterCount(characterCount + 1);
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

  // const clearForm = () => {
  //   setReview({
  //     product_id: productId,
  //     rating: 0,
  //     summary: '',
  //     body: '',
  //     recommend: '',
  //     name: '',
  //     email: '',
  //     photos: [],
  //     characteristics: {},
  //   });
  // };

  return (
    (metaReviews && review && review.photos)
      ? (
        <>
          <div
            style={{ maxHeight: '100%' }}
            role="presentation"
            onClick={() => {
              onClose();
              // clearForm();
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
                  // clearForm();
                }}
              >
                x
              </p>
            </div>
            <div className={styles.modalBody}>
              <form
                onSubmit={(e) => {
                  handleSubmit(e);
                }}
                action=""
                encType="multipart/form-data"
              >
                <p style={{ margin: '5px' }}>Overall Rating: *</p>
                <span className={Rstyles.starRating}>
                  <InteractiveStars review={review} setReview={setReview} />
                </span>
                <p>Would you recommend this product? *</p>
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
                <p>Review Body: *</p>
                <textarea
                  required="required"
                  onChange={(e) => {
                    setReview({ ...review, body: e.target.value });
                    handleCountChange(e);
                  }}
                  minLength="50"
                  maxLength="1000"
                  className={styles.qInput}
                  placeholder="Why did you like the product or not?"
                  type="text"
                />
                <p
                  style={{ margin: '5px', fontSize: '12px', fontStyle: 'italic' }}
                >
                  {characterCount <= 0 ? 'Minimum Characters Reached' : `Minimum required characters left: ${characterCount}`}
                </p>
                <p>What is your nickname? *</p>
                <input
                  required="required"
                  onChange={(e) => setReview({ ...review, name: e.target.value })}
                  className={Rstyles.modalInput}
                  maxLength="60"
                  type="text"
                  placeholder="Example: jackson11!"
                />
                <p className={styles.finePrint}>{review.name.length > 0 ? 'For privacy reasons, do not use your full name or email address' : ''}</p>
                <p>What is your email? *</p>
                <input
                  required="required"
                  onChange={(e) => setReview({ ...review, email: e.target.value })}
                  className={Rstyles.modalInput}
                  maxLength="60"
                  type="text"
                  placeholder="Example: jackson11@email.com"
                />
                <p className={styles.finePrint}>{review.email.length > 0 ? 'For authentication reasons, you will not be emailed' : ''}</p>
                <div />
                <div>
                  {review.photos.length < 5 ? <input value="" onChange={handleChange} type="file" /> : null}
                  {thumbnails.map((photo) => <img alt={photo} key={photo} className={`${Rstyles.imgThumbnail} ${Rstyles.reviewPhoto}`} src={photo} />)}
                </div>
                <p style={{ margin: '5px', fontSize: '12px', fontStyle: 'italic' }}>* Mandatory Fields</p>
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
