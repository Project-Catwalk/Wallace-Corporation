import React from 'react';

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
  const { stylesArr } = props;

  // stylesArr[0].photos[0].thumbnail_url is the current src

  return <img  src="https://images.unsplash.com/photo-1554260570-9140fd3b7614?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"/>
};

export default MainDisplay;
