import React, { useState } from 'react';
import styles from '../../styleComponents/QA.modules.css';
import QASearchBar from './QASearchBar.jsx'
import Question from './Question';
import Modal from './QuestionModal';

const QA = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { questions, getQuestions, productId } = props;
  return (
    <>
    <div className={styles.QA}>
      <div className={styles.search}>
        <QASearchBar />
      </div>
      <div className={styles.qa}>
        {
        questions.map((question) => <Question productId={productId} getQuestions={getQuestions} question={question} />)
        }
      </div>
      <div className={styles.buttons}>
        <button>More Answered Questions</button>
        <button onClick={() => setIsOpen(true)}>Add A Question + </button>
        <Modal productId={productId} getQuestions={getQuestions} onClose={() => setIsOpen(false)} open={isOpen}></Modal>
      </div>
    </div>
    </>
  );
};

export default QA;
