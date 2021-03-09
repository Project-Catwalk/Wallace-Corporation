import React, { useState, useEffect, useRef } from 'react';
import styles from '../../styleComponents/Overview.module.css';

const OverviewExpandedModal = (props) => {
  // STILL TO DO:

  // Need to make thumbnail icons instead of images show up on expanded view (think little dots, highlighted to demonstrate which image is selected)
  // Need up and down arrows for the thumbnails to slide the image by fixed amount of pixels
  // Need to have parallax/scroll effect on zoomed in view of main image
  // Add accessibility to the click handler

  const { children, open, close } = props;

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
      console.log('event: ', event);
      // console.log('event.screenX: ', event.screenX);
      // console.log('event.screenY: ', event.screenY);
    }
  };

  return (
    <>
      <div className={styles.modalOverlay} />
      <div className={styles.modal} ref={imgRef} onClick={zoom} onMouseMove={mouseMove} style={{ height, width, cursor: cursorString}}>
        {children}
        <button type="submit" onClick={close}>Close</button>
      </div>
    </>
  );
};

export default OverviewExpandedModal;
