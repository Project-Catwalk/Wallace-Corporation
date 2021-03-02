import axios from 'axios';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styles from '../../styleComponents/App.module.css';
import qastyles from '../../styleComponents/QA.modules.css';

function Modal({open, onClose, question_id, getQuestions, productId}) {
  const [answer, setAnswer] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [photos, setPhotos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let answerInfo = {
      body: answer,
      name: username,
      email: email,
      photos: photos,
    };
    axios.post(`/qa/questions/${question_id}/answers`, answerInfo)
      .then(() => getQuestions(productId))
      .catch(console.log);
  };

  return ReactDOM.createPortal(
    <>
      <div onClick={onClose} className={open ? styles.overlay : ''} ></div>
      <div style={{
          transform: open ? 'translate(-50%, -50%)' : 'translate(-50%, -150vh)'
      }}
        className={styles.modal}
      >
        <div className={styles.modalHeader}>
          <h3>Add an Answer</h3>
          <p className={styles.closeModal} onClick={onClose}>x</p>
        </div>
        <div className={styles.modalBody}>
          <form onSubmit={(e) => handleSubmit(e)} action="">
            <p>Your Answer</p>
            <textarea onChange={(e) => setAnswer(e.target.value)} className={styles.qInput} maxLength="1000" />
            <p>What is your nickname?</p>
            <input onChange={(e) => setUsername(e.target.value)} className={qastyles.modalInput} type="text" placeholder="Example: jack543!" />
            <p>Your Email</p>
            <input onChange={(e) => setEmail(e.target.value)} className={qastyles.modalInput} type="text" placeholder="Example: jack@email.com" />
            <button>Add Photos</button>
            <button type="submit" className={styles.modalButton}>Submit Answer</button>
          </form>
        </div>
      </div>
    </>,
    document.getElementById('modal'),
  );
}

export default Modal;
