import React, { useState } from 'react';
import styles from '../../styleComponents/QA.modules.css';
import QASearchBar from './QASearchBar.jsx'
import Question from './Question';
import Modal from './QuestionModal';

const QA = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  let { questions } = props;
  return (
    <>
    <div className={styles.QA}>
      <div className={styles.search}>
        <QASearchBar />
      </div>
      <div className={styles.qa}>
        {
        questions.map((question) => <Question question={question} />)
        }
      </div>
      <div className={styles.buttons}>
        <button>More Answered Questions</button>
        <button onClick={() => setIsOpen(true)}>Add A Question + </button>
        <Modal onClose={() => setIsOpen(false)} open={isOpen}></Modal>
      </div>
    </div>
    </>
  );
};

export default QA;