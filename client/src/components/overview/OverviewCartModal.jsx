import React, { useState, useEffect, useRef } from 'react';
import styles from '../../styleComponents/Overview.module.css';

const OverviewCartModal = (props) => {
  const { children, open, close } = props;

  if (!open) {
    return null;
  }

  return (
    <div>
      <div className={styles.cartOverlay} />
      <div className={styles.modal}>
        {children}
        <button type="submit" onClick={close}>Close</button>
      </div>
    </div>
  );
};

export default OverviewCartModal;
