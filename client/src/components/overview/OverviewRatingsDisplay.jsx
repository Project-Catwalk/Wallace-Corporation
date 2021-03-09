import React, { useRef } from 'react';
import RatingBreakdown from '../reviews/RatingBreakdown';

const ReviewStars = (props) => {
  // STILL TO DO:

  // Import Luci's stars to this display on this section
  // Reset imputRef to the top of her section

  // const { el } = props;

  console.log('props: ', props);

  const inputRef = useRef();
  // const inputRef = React.createRef();

  const handleClick = () =>
    inputRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

  return <button type="submit" ref={inputRef} onClick={handleClick}>Read all reviews</button>;
};

export default ReviewStars;
