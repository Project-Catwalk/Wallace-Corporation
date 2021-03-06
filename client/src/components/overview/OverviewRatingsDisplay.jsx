import React, { useRef } from 'react';

const ReviewStars = (props) => {
  // Import the stars display from Luci's review section
  // Create a "Read all reviews" link to scroll down to the Reviews section
  // If no reviews exist yet, this should be hidden

  // Need to add ability to see a link of "Read all reviews" next to stars
  const inputRef = useRef();

  const handleClick = () =>
    inputRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

  return <button type="submit" ref={inputRef} onClick={handleClick}>Read all reviews</button>;
};

export default ReviewStars;
