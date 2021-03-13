import React, { useState, useEffect, useRef } from 'react';
import styles from '../../styleComponents/Overview.module.css';
import OverviewExpandedModal from './OverviewExpandedModal';

const MainDisplay = (props) => {
  const { photos, styleChoice } = props;

  const [mainGallery, setMainGallery] = useState([]);
  const [thumbnailGallery, setThumbnailGallery] = useState([]);
  const [imgIndex, setImgIndex] = useState(0);
  const [displayedImg, setDisplayedImg] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const moveThumbnails = useRef();

  useEffect(() => {
    const thumbnails = [];
    const normal = [];

    for (let i = 0; i < photos.length; i++) {
      thumbnails.push(photos[i].thumbnail_url);
      normal.push(photos[i].url);
    }

    setMainGallery(normal);
    setThumbnailGallery(thumbnails);
    setDisplayedImg(normal[imgIndex]);
  }, [photos]);

  useEffect(() => {
    setDisplayedImg(mainGallery[imgIndex]);
  }, [imgIndex]);

  const decrementImgIndex = (event) => {
    event.preventDefault();

    setImgIndex(imgIndex - 1);
  };

  const incrementImgIndex = (event) => {
    event.preventDefault();

    setImgIndex(imgIndex + 1);
  };

  const expandView = (event) => {
    event.preventDefault();

    if (event.key === 'Enter' || event.key === 'Space bar') {
      setIsOpen(true);
      setDisplayedImg(mainGallery[imgIndex]);
    }

    setIsOpen(true);
    setDisplayedImg(mainGallery[imgIndex]);
  };

  const onClose = (event) => {
    event.preventDefault();

    if (event.key === 'Enter' || event.key === 'Space bar') {
      setIsOpen(false);
    }

    setIsOpen(false);
  };

  const thumbnailClickHandler = (event) => {
    event.preventDefault();

    const displayedImgIndex = thumbnailGallery.indexOf(event.target.src);

    setImgIndex(displayedImgIndex);
  };

  const slideDown = () => {
    if (imgIndex > 5) {
      const num = -56 * (imgIndex - 5);

      const pixels = num + 'px';

      moveThumbnails.current.style.top = pixels;
    }

    setImgIndex(imgIndex === thumbnailGallery.length - 1 ? 0 : imgIndex + 1);
  };

  const slideUp = () => {
    if (imgIndex > 5) {
      const num = -56 * (imgIndex - 6);

      const pixels = num + 'px';

      moveThumbnails.current.style.top = pixels;
    }

    setImgIndex(imgIndex === 0 ? thumbnailGallery.length - 1 : imgIndex - 1);
  };

  return (
    <>
      <div className={styles.photoGrid}>
        {imgIndex !== 0 && (<button type="submit" aria-label="Previous image" className={styles.mainDisplayButtonLeft} onClick={decrementImgIndex}>&#8249;</button>)}
        <div className={styles.mainDisplay}>
          <img
            className={styles.img}
            tabIndex={0}
            role="tablist"
            src={displayedImg}
            onClick={expandView}
            onKeyDown={expandView}
            alt={styleChoice}
          />
          {/* <input
            type="image"
            className={styles.img}
            src={displayedImg}
            onClick={expandView}
            alt={styleChoice}
          /> */}
          <OverviewExpandedModal open={isOpen} close={onClose} displayedImg={displayedImg}>
            <img role="tab" src={displayedImg} alt={styleChoice} />
            {/* <input type="image" src={displayedImg} alt={styleChoice} /> */}
          </OverviewExpandedModal>
        </div>
        {imgIndex !== mainGallery.length - 1 && (<button type="submit" aria-label="Next image" className={styles.mainDisplayButtonRight} onClick={incrementImgIndex}>&#8250;</button>)}
      </div>
      {imgIndex !== 0 && (
        <button type="submit" aria-label="Previous thumbnail" className={styles.upButton} onClick={slideUp}>
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
          </svg>
        </button>
      )}
      <div className={styles.slider}>
        <div ref={moveThumbnails} className={styles.thumbnailContainer}>
          {thumbnailGallery.map((img, index) => <input type="image" key={index} onClick={thumbnailClickHandler} src={img} className={styles.thumbnailImg} alt={styleChoice} />)}
        </div>
      </div>
      {imgIndex !== mainGallery.length - 1 && (
        <button type="submit" aria-label="Next thumbnail" className={styles.downButton} onClick={slideDown}>
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
          </svg>
        </button>
      )}
    </>
  );
};

export default MainDisplay;
