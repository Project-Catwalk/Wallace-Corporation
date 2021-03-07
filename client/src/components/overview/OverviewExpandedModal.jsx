import React, { useState, useEffect, useRef } from 'react';
import styles from '../../styleComponents/Overview.module.css';

const OverviewExpandedModal = (props) => {
  // STILL TO DO:

  // Need to make thumbnail icons instead of images show up on expanded view (think little dots, highlighted to demonstrate which image is selected)
  // Need left and right arrows for the main image with the same functionality as the normal view
  // Need up and down arrows for the thumbnails with the same functionality as the normal view
  // Need to have parallax/scroll effect on zoomed in view of main image
  // Add accessibility to the click handler

  const { children, open, close } = props;

  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [cursorString, setcursorString] = useState('crosshair');

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
      setcursorString('crosshair');
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
