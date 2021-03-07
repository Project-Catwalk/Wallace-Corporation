import React, { useState, useEffect } from 'react';
import styles from '../../styleComponents/Overview.module.css';
import OverviewExpandedModal from './OverviewExpandedModal';

const MainDisplay = (props) => {
  // STILL TO DO:

  // Need to find a way to scroll through the thumbnails that are beyond the 7 in view
  // Need to have highlighted/opaque image exist even if thumbnail isn't used to change images

  const { photos, styleChoice } = props;

  const [mainGallery, setMainGallery] = useState([]);
  const [thumbnailGallery, setThumbnailGallery] = useState([]);
  const [imgIndex, setImgIndex] = useState(0);
  const [displayedImg, setDisplayedImg] = useState('');
  const [isOpen, setIsOpen] = useState(false);

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

    setIsOpen(true);
    setDisplayedImg(mainGallery[imgIndex]);
  };

  const onClose = (event) => {
    event.preventDefault();

    setIsOpen(false);
  };

  const thumbnailClickHandler = (event) => {
    event.preventDefault();

    let displayedImgIndex = thumbnailGallery.indexOf(event.target.src);

    setImgIndex(displayedImgIndex);
    setDisplayedImg(event.target.src);
  };

  // const refs = list.reduce((acc, value) => {
  //   acc[value.id] = React.createRef();
  //   return acc;
  // }, {});

  // const handleClick = id =>
  //   refs[id].current.scrollIntoView({
  //     behavior: 'smooth',
  //     block: 'start',
  //   });

  // const slideThumbnailsDown = (event) => {
  //   event.preventDefault();

  // };

  // const slideThumbnailsUp = (event) => {
  //   event.preventDefault();

  // };

  return (
    <div>
      <div className={styles.mainDisplay}>
        {imgIndex !== 0 && (<button type="submit" onClick={decrementImgIndex}>Left</button>)}
        <img src={displayedImg} onClick={expandView} alt={styleChoice}/>
        {imgIndex !== mainGallery.length - 1
        && (<button type="submit" onClick={incrementImgIndex}>Right</button>)}
        <OverviewExpandedModal open={isOpen} close={onClose}>
          <img src={displayedImg} alt={styleChoice} className={styles.expandedImg} />
        </OverviewExpandedModal>
      </div>
      {imgIndex !== 0 && (<button type="submit" onClick={decrementImgIndex}>Up</button>)}
      <div className={styles.slider}>
        {thumbnailGallery.map((img, index) => <input type="image" key={index} onClick={thumbnailClickHandler} src={img} className={styles.thumbnailImg} alt={styleChoice} />)}
      </div>
      {imgIndex !== mainGallery.length - 1 && (<button type="submit" onClick={incrementImgIndex}>Down</button>)}
    </div>
  );
};

export default MainDisplay;
