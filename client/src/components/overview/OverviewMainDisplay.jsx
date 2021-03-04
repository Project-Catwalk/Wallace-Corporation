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

  const [mainGallery, setMainGallery] = useState('');

  useEffect(() => {
    if (photos.length > 0) {
      setMainGallery(photos[0].thumbnail_url);
    }
  }, [photos]);

  const leftArrow = (event) => {
    event.preventDefault();
    // Need conditional to make arrow disappear if at start index
    for (let i = 0; i < photos.length; i++) {
      console.log('photos in left: ', photos[i]);
      setMainGallery(photos[i].thumbnail_url);
    }
  };

  const rightArrow = (event) => {
    event.preventDefault();

    // Need conditional to make arrow disappear if at end index
    for (let i = 0; i < photos.length; i++) {
      setMainGallery(photos[i].thumbnail_url);
    }
  };

  return (
    <div>
      <button onClick={leftArrow}>Left</button>
      <img className={styles.mainDisplay} src={mainGallery}/>
      <button onClick={rightArrow}>Right</button>
      {/* <div>
        <img className={styles.thumbnails} src={''}/>
      </div> */}
    </div>
  );
};

export default MainDisplay;
