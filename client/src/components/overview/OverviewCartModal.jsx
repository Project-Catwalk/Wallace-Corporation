import React from 'react';
import styles from '../../styleComponents/Overview.module.css';

const OverviewCartModal = (props) => {
  const {
    children, open, close, exitCart
  } = props;

  if (!open) {
    return null;
  }

  return (
    <div>
      <div className={styles.cartOverlay} />
      <div className={styles.cartModal}>
        <div role="button" aria-label="Add to cart" tabIndex={0} onClick={exitCart} onKeyDown={exitCart} className={styles.cartXToClose}>X</div>
        {children}
        <br />
        Is this correct?:
        <br />
        <button type="submit" aria-label="Confirm" tabIndex={0} onKeyDown={close} onClick={close}>Confirm</button>
      </div>
    </div>
  );
};

export default OverviewCartModal;
