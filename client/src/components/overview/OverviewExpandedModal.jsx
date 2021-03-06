import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from '../../styleComponents/Overview.module.css';

const OverviewExpandedModal = (props) => {

  const { children, open, close } = props;

  if (!open) {
    return null;
  }

  return (
    <>
      <div className={styles.modalOverlay} />
      <div className={styles.modal}>
        {children}
        <button type="submit" onClick={close}>Close</button>
      </div>
    </>
  );
};

export default OverviewExpandedModal;
