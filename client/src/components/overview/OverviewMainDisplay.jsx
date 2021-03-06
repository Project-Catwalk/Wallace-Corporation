import React, { useState, useEffect } from 'react';
import styles from '../../styleComponents/Overview.module.css';
import OverviewExpandedModal from './OverviewExpandedModal';

const MainDisplay = (props) => {
  // Create overlay of the other thumbnails in vertical alignment to the left of the display, max of 7
  // Make thumbnail of main display opacity change on button click to new main display
  // Make main image clickable to blow up to fill most of page
  // Mouse icon changes to a "+" on hover
  // Thumbnails change to small icons with distinct icon of which item is displayed
  // Clicking again zooms 2.5x to make image larger than the screen
  // Sliding the mouse should re-orient the image display accordingly
  // Thumbnail icons disappear and mouse icon changes to "-"
  // Clicking in zoomed mode will return to expanded view

  // Limit quantity of thumbnails??
  // body.single-product div.images div.thumbnails {
  //   max-height: 380px;
  //   overflow: hidden;
  // /* Optional - create a gradient fade at bottom for webkit browsers */
  //   -webkit-mask-image: -webkit-gradient(linear, left 90%, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)));
  // }

  // Possibly .box { overflow, scroll }

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

  // const refs = list.reduce((acc, value) => {
  //   acc[value.id] = React.createRef();
  //   return acc;
  // }, {});

  // const handleClick = id =>
  //   refs[id].current.scrollIntoView({
  //     behavior: 'smooth',
  //     block: 'start',
  //   });

  const slideThumbnailsDown = (event) => {
    event.preventDefault();

  };

  const slideThumbnailsUp = (event) => {
    event.preventDefault();

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
      {imgIndex !== 0 && (<button type="submit" onClick={slideThumbnailsUp}>Up</button>)}
      <div className={styles.slider}>
        {thumbnailGallery.map((img, index) => <input type="image" key={index} onClick={thumbnailClickHandler} src={img} className={styles.thumbnailImg} alt={styleChoice} />)}
      </div>
      {imgIndex !== mainGallery.length - 1 && (<button type="submit" onClick={slideThumbnailsDown}>Down</button>)}
    </div>
  );
};

export default MainDisplay;
