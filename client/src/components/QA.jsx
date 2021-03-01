import React from 'react';
import styles from '../styleComponents/QA.modules.css';
import QASearchBar from './QASearchBar.jsx'
import Question from './Question';

const QA = (props) => {
  let { questions } = props;
  console.log(questions);
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
        Buttons
      </div>
    </div>
  );
}

export default QA;
