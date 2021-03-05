import React, { useState, useEffect } from 'react';
import styles from '../../styleComponents/Overview.module.css';

const MainDisplay = (props) => {
  // Create overlay of the other thumbnails in vertical alignment to the left of the display, max of 7
  // Mouse hover over diplay should change mouse icon to mag glass, exclude buttons and thumbnails from this feature
  // Make main image clickable to blow up to fill most of page
  // Mouse icon changes to a "+" on hover
  // Thumbnails change to small icons with distinct icon of which item is displayed
  // Clicking again zooms 2.5x to make image larger than the screen
  // Sliding the mouse should re-orient the image display accordingly
  // Thumbnail icons disappear and mouse icon changes to "-"
  // Clicking in zoomed mode will return to expanded view

  // Limit quantity of thumbnails??
//   body.single-product div.images div.thumbnails {
//     max-height: 380px;
//     overflow: hidden;
// /* Optional - create a gradient fade at bottom for webkit browsers */
//     -webkit-mask-image: -webkit-gradient(linear, left 90%, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)));
//   }

  const { photos } = props;

  const [mainGallery, setMainGallery] = useState([]);
  const [expandedImg, setExpandedImg] = useState([]);
  const [imgIndex, setImgIndex] = useState(0);
  const [displayedImg, setDisplayedImg] = useState('');

  useEffect(() => {
    const thumbnails = [];
    const expanded = [];

    for (let i = 0; i < photos.length; i++) {
      thumbnails.push(photos[i].thumbnail_url);
      expanded.push(photos[i].url);
    }

    setMainGallery(thumbnails);
    setExpandedImg(expanded);
    setDisplayedImg(thumbnails[imgIndex]);
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

  const thumbnailClickHandler = (event) => {
    event.preventDefault();

    let displayedThumbnailIndex = mainGallery.indexOf(event.target.src);

    setImgIndex(displayedThumbnailIndex);
    setDisplayedImg(event.target.src);
  };

  return (
    <div>
      <div>
        {imgIndex !== 0 && (<button onClick={decrementImgIndex}>Left</button>)}
        <img className={styles.mainDisplay} src={displayedImg}/>
        {imgIndex !== mainGallery.length - 1 && (<button onClick={incrementImgIndex}>Right</button>)}
      </div>
      <div>
        {imgIndex !== 0 && (<button onClick={decrementImgIndex}>Up</button>)}
        {mainGallery.map((img, index) => <input type="image" className={styles.thumbnails} key={index} onClick={thumbnailClickHandler} src={img}/>)}
        {imgIndex !== mainGallery.length - 1 && (<button onClick={incrementImgIndex}>Down</button>)}
      </div>
    </div>
  );
};

export default MainDisplay;
