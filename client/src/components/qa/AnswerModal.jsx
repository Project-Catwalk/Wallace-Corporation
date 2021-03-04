import axios from 'axios';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styles from '../../styleComponents/App.module.css';
import qastyles from '../../styleComponents/QA.modules.css';
import Photo from './Photo';

function Modal({open, onClose, question_id, getQuestions, productId}) {
  const [answer, setAnswer] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [thumbnails, setThumbnails] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState('');

  const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );

  const clearForm = (e) => {
    setAnswer('');
    setUsername('');
    setEmail('');
    setPhotos([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let answerInfo = {
      body: answer,
      name: username,
      email: email,
      photos: photos,
    };
    if (!validEmailRegex.test(email)) {
      setError('*You must enter a valid email');
      return;
    }

    // console.log(photos);
    // console.log(answerInfo);
    // console.log('----------------')
    const formData = new FormData();
    formData.append('photo', photos[0]);
    console.log(formData);

    // axios.post(`/qa/questions/${question_id}/answers`, answerInfo)
    //   .then(() => getQuestions(productId))
    //   .then(() => clearForm())
    //   .catch(console.log);
  };

  const handleChange = (e) => {
    if (photos.length < 5) {
      setPhotos([
        ...photos,
        e.target.files[0],
      ]);
      setThumbnails([
        ...thumbnails,
        URL.createObjectURL(e.target.files[0]),
      ]);
    }
    // console.log(photos);
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
      <div style={{
          transform: open ? 'translate(-50%, -50%)' : 'translate(-50%, -150vh)'
      }}
        className={styles.modal}
      >
        <div className={styles.modalHeader}>
          <h3>Add an Answer</h3>
          <p
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
          <form onSubmit={(e) => handleSubmit(e)} action="">
            <p>Your Answer *</p>
            <textarea value={answer} required="required" onChange={(e) => setAnswer(e.target.value)} className={styles.qInput} maxLength="1000" />
            <p>What is your nickname? *</p>
            <input value={username} required="required" onChange={(e) => setUsername(e.target.value)} className={qastyles.modalInput} type="text" placeholder="Example: jack543!" />
            <p className={styles.finePrint}>{username.length > 0 ? 'For privacy reasons, do not use your full name or email address' : ''}</p>
            <p>Your Email *</p>
            <input value={email} required="required" onChange={(e) => setEmail(e.target.value)} className={qastyles.modalInput} type="text" placeholder="Example: jack@email.com" />
            <p className={styles.finePrint}>{email.length > 0 ? 'For authentication reasons, you will not be emailed' : ''}</p>
            <div>
              {photos.length < 5 ? <input onChange={handleChange} type="file" /> : null}
              {thumbnails.map((photo, idx) => <Photo key={idx} photo={photo}/>)}
            </div>
            <button type="submit" className={styles.modalButton}>Submit Answer</button>
            <p className={styles.finePrint}>{error}</p>
          </form>
        </div>
      </div>
    </>
  )
}

export default Modal;
