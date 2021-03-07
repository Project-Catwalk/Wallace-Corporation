import React, { useRef } from 'react';

const ReviewStars = (props) => {
  // STILL TO DO:

  // Import Luci's stars to this display on this section
  // Reset imputRef to the top of her section

  const inputRef = useRef();

  const handleClick = () =>
    inputRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

  return <button type="submit" ref={inputRef} onClick={handleClick}>Read all reviews</button>;
};

export default ReviewStars;
