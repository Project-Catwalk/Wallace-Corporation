import React, { useState, useEffect, useRef } from 'react';
import styles from '../../styleComponents/Overview.module.css';

const OverviewExpandedModal = (props) => {
  const { children, open, close } = props;

  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [cursorString, setcursorString] = useState('zoom-in');

  const imgRef = useRef();

  if (!open) {
    return null;
  }

  const zoom = (event) => {
    event.preventDefault();

    const currentHeight = imgRef.current.clientHeight;
    const currentWidth = imgRef.current.clientWidth;

    if (isZoomed === false) {
      setIsZoomed(true);
      setHeight(currentHeight * 2.5);
      setWidth(currentWidth * 2.5);
      setcursorString('zoom-out');
    } else {
      setIsZoomed(false);
      setHeight(currentHeight / 2.5);
      setWidth(currentWidth / 2.5);
      setcursorString('zoom-in');
    }
  };

  return (
    <>
      <div className={styles.modalOverlay} />
      <div className={styles.modal} ref={imgRef} onClick={zoom} style={{ height, width, cursor: cursorString}}>
        {children}
        <button type="submit" onClick={close}>Close</button>
      </div>
    </>
  );
};

export default OverviewExpandedModal;
