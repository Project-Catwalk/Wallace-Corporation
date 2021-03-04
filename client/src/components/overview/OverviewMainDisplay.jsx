import React, { useState, useEffect } from 'react';
import styles from '../../styleComponents/Overview.module.css';

const MainDisplay = (props) => {
  // Import thumbnail_urls
  // Set a default thumbnail and make that the primary image
  // Create arrow buttons to the right and left of the image for scrolling
  // Hide the button if on the corresponding start or end index
  // Create overlay of the other thumbnails in vertical alignment to the left of the display, max of 7
  // Create button above and below for scrolling and hide like above buttons
  // Link the displayed image to the style section buttons
  // Mouse hover over diplay should change mouse icon to mag glass, exclude buttons and thumbnails from this feature
  // Make main image clickable to blow up to fill most of page
  // Mouse icon changes to a "+" on hover
  // Thumbnails change to small icons with distinct icon of which item is displayed
  // Clicking again zooms 2.5x to make image larger than the screen
  // Sliding the mouse should re-orient the image display accordingly
  // Thumbnail icons disappear and mouse icon changes to "-"
  // Clicking in zoomed mode will return to expanded view
  const { photos } = props;

  // const [defaultImage, setDefaultImage] = useState('');
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

  const leftArrow = (event) => {
    event.preventDefault();
    // Need conditional to make arrow disappear if at start index

    setImgIndex(imgIndex - 1);
  };

  const rightArrow = (event) => {
    event.preventDefault();
    // Need conditional to make arrow disappear if at end index

    setImgIndex(imgIndex + 1);
  };

  const thumbnailClickHandler = (event) => {
    event.preventDefault();

    setDisplayedImg(event.target.src);
  };

  return (
    <div>
      <div>
        <button onClick={leftArrow}>Left</button>
        <img className={styles.mainDisplay} src={displayedImg}/>
        <button onClick={rightArrow}>Right</button>
      </div>
      <div>
        {mainGallery.map((img, index) => <input type="image" className={styles.thumbnails} key={index} onClick={thumbnailClickHandler} src={img}/>)}
      </div>
    </div>
  );
};

export default MainDisplay;
