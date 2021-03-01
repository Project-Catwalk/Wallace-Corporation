import React, { useState } from 'react';
import styles from '../../styleComponents/QA.modules.css';

const QASearchBar = () => {
  const handleChange = () => {

  };
  return (
    <>
      <h2>Questions & Answers</h2>
      <input
        className={styles.searchBar}
        placeholder="Search Questions..."
      />
    </>
  );
};

export default QASearchBar;