import axios from 'axios';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styles from '../../styleComponents/App.module.css';
import qastyles from '../../styleComponents/QA.modules.css';

function QuestionModal({ open, onClose, getQuestions, productId }) {
  const [question, setQuestion] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );

  const clearForm = () => {
    setQuestion('');
    setUsername('');
    setEmail('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let questionInfo = {
      body: question,
      name: username,
      email: email,
      product_id: productId,
    };
    if (!validEmailRegex.test(email)) {
      setError('*You must enter a valid email');
      return;
    }
    axios.post('/qa/questions', questionInfo)
      .then(() => getQuestions(20111))
      .then(() => clearForm())
      .catch(console.log);
  };


  return (
    <>
      <div 
        onClick={() => {
          onClose();
          clearForm();
        }} 
        data-testid="question-overlay"
        className={open ? styles.overlay : ''}
        >
      </div>
      <div 
        style={{
          transform: open ? 'translate(-50%, -50%)' : 'translate(-50%, -150vh)'
        }}
        className={styles.modal}
        >
        <div className={styles.modalHeader}>
          <h3>Ask Your Question about the Product</h3>
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
          <form id="questionForm" onSubmit={(e) => handleSubmit(e)} action="">
            <p>Question *</p>
            <textarea data-testid="question-input" value={question} required="required" onChange={(e) => setQuestion(e.target.value)} maxLength="1000" className={styles.qInput} type="text" />
            <p>What is your nickname? *</p>
            <input data-testid="question-username-input" value={username} required="required" onChange={(e) => setUsername(e.target.value)} className={qastyles.modalInput} maxLength="60" placeholder="example: jackson11!" type="text" />
            <p className={styles.finePrint}>{username.length > 0 ? 'For privacy reasons, do not use your full name or email address' : ''}</p>
            <p>Your Email *</p>
            <input data-testid="question-email-input" value={email} required="required" placeholder="example: jackson11!@gmail.com" onChange={(e) => setEmail(e.target.value)} className={qastyles.modalInput} maxLength="60" type="text" />
            <p className={styles.finePrint}>{email.length > 0 ? 'For authentication reasons, you will not be emailed' : ''}</p>
            <div />
            <button data-testid="question-modal-submit-button" type="submit" className={styles.modalButton}>Submit Question</button>
            <p className={styles.finePrint}>{error}</p>
          </form>
        </div>
      </div>
    </>
  );
}

export default QuestionModal;
