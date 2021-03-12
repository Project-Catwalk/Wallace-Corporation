import axios from 'axios';
import React, { useState } from 'react';
import styles from '../../styleComponents/App.module.css';
import qastyles from '../../styleComponents/QA.modules.css';
import ExpandedPhotos from '../ExpandedPhotos';

function AnswerModal({open, onClose, question_id, getQuestions, productId}) {
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
    setThumbnails([]);
    setPhotos([]);
  };

  const toBase64 = file => new Promise((resolve, reject) => {
    console.log(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let answerInfo = {
      body: answer,
      name: username,
      email: email,
      photos: [],
    };

    if (!validEmailRegex.test(email)) {
      setError('*You must enter a valid email');
      return;
    }

    const promises = [];
    
    for (const photo of photos) {
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
    .then((results) => answerInfo.photos = results)
    .then(() => {
      return axios.post(`/qa/questions/${question_id}/answers`, answerInfo)
    })
    .then(() => getQuestions(20104))
    .then(() => clearForm())
    .catch(console.log);

    
  };

  const handleChange = (e) => {
    console.log(e.target.files[0]);
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
          <form encType="multipart/form-data" onSubmit={(e) => handleSubmit(e)} action="">
            <p>Your Answer *</p>
            <textarea data-testid="answer-input" value={answer} required="required" onChange={(e) => setAnswer(e.target.value)} className={styles.qInput} maxLength="1000" />
            <p>What is your nickname? *</p>
            <input data-testid="answer-username-input" value={username} required="required" onChange={(e) => setUsername(e.target.value)} className={qastyles.modalInput} type="text" placeholder="Example: jack543!" />
            <p className={styles.finePrint}>{username.length > 0 ? 'For privacy reasons, do not use your full name or email address' : ''}</p>
            <p>Your Email *</p>
            <input data-testid="answer-email-input" value={email} required="required" onChange={(e) => setEmail(e.target.value)} className={qastyles.modalInput} type="text" placeholder="Example: jack@email.com" />
            <p className={styles.finePrint}>{email.length > 0 ? 'For authentication reasons, you will not be emailed' : ''}</p>
            <div>
              {photos.length < 5 ? <input data-testid="answer-photo-upload" value={''} onChange={handleChange} type="file" /> : null}
              {thumbnails.map((photo, idx) => <ExpandedPhotos key={idx} photo={photo} />)}
            </div>
            <button data-testid="answer-modal-submit-button" type="submit" className={styles.modalButton}>Submit Answer</button>
            <p className={styles.finePrint}>{error}</p>
          </form>
        </div>
      </div>
    </>
  )
}

export default AnswerModal;
