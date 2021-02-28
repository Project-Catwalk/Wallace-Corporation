import React from 'react';
import styles from '../styleComponents/QA.modules.css';
import QASearchBar from './QASearchBar.jsx'

const QA = (props) => {

  return (
    <div className={styles.QA}>
      <div className={styles.search}>
        <QASearchBar />
      </div>
      <div className={styles.qa}>
        QA Section
      </div>
      <div className={styles.buttons}>
        Buttons
      </div>
    </div>
  );
}

export default QA;
