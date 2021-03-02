import axios from 'axios';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styles from '../../styleComponents/App.module.css';
import qastyles from '../../styleComponents/QA.modules.css';
import App from '../App';

function Modal({ open, onClose, getQuestions, productId }) {
  if (!open) {
    return null;
  }

  const [question, setQuestion] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    let questionInfo = {
      body: question,
      name: username,
      email: email,
      product_id: productId,
    };
    axios.post('/qa/questions', questionInfo)
      .then(() => getQuestions(productId))
      .catch(console.log);
  };

  return ReactDOM.createPortal(
    <>
      <div className={styles.overlay}></div>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <h3>Ask Your Question about the Product</h3>
          <p className={styles.closeModal} onClick={onClose}>x</p>
        </div>
        <div className={styles.modalBody}>
          <form onSubmit={(e) => handleSubmit(e)} action="">
            <p>Question:</p>
            <textarea onChange={(e) => setQuestion(e.target.value)} maxLength="1000" className={styles.qInput} type="text" />
            <p>What is your nickname?</p>
            <input onChange={(e) => setUsername(e.target.value)} className={qastyles.modalInput} maxLength="60" placeholder="example: jackson11!" type="text" />
            <p>email</p>
            <input onChange={(e) => setEmail(e.target.value)} className={qastyles.modalInput} maxLength="60" type="text" />
            <div />
            <button type="submit" className={styles.modalButton} >Submit</button>
          </form>
        </div>
      </div>
    </>,
    document.getElementById('modal'),
  );
}

export default Modal;
