import React from 'react';

const Description = (props) => {
  // Hide this if no description available
  // Import product description
  // Display based on whatever style is selected
  const { description } = props
  return (
    <p>{description}</p>
  );
};

export default Description;
