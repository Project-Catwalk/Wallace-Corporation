import React from 'react';
import styles from '../../styleComponents/QA.modules.css';
import QASearchBar from './QASearchBar.jsx'
import Question from './Question';
import QuestionModal from './QuestionModal';

const QA = (props) => {
  let { questions } = props;
  return (
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
        <button>Add A Question + </button>
      </div>
    </div>
  );
}

export default QA;
