import React, { useState, useEffect, useRef } from 'react';
import styles from '../../styleComponents/Overview.module.css';

const OverviewExpandedModal = (props) => {
  // STILL TO DO:

  // Need to make thumbnail icons instead of images show up on expanded view (pagination)
  // Need to have parallax/scroll effect on zoomed in view of main image

  const { children, open, close, } = props;

  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [cursorString, setcursorString] = useState('crosshair');

  const [move, setMove] = useState({ x: 0, y: 0 });

  const imgRef = useRef();

  if (!open) {
    return null;
  }

  const zoom = (event) => {
    event.preventDefault();

    if (event.key === 'Enter' || event.key === 'Spacebar') {
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
        setcursorString('crosshair');
      }
    }

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
      setcursorString('crosshair');
    }
  };

  const mouseMove = (event) => {
    if (isZoomed) {
      setMove({ x: event.clientX, y: event.clientY });
      // console.log('event: ', event);
      // console.log('event.clientX: ', event.clilentX);
      // console.log('event.clientY: ', event.clientY);
    }
  };

  return (
    <>
      <div className={styles.modalOverlay} />
      <div
        role="button"
        tabIndex={0}
        onKeyDown={zoom}
        className={styles.modal}
        ref={imgRef}
        onClick={zoom}
        onMouseMove={mouseMove}
        style={{ height, width, cursor: cursorString }}
      >
        <div className={styles.expandedImgAndX}>
          <div role="button" tabIndex={0} className={styles.mainModalXToClose} onClick={close} onKeyDown={close}>X</div>
          {children}
        </div>
      </div>
    </>
  );
};

export default OverviewExpandedModal;
