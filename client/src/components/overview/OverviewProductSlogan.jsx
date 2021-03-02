import React from 'react';

const Slogan = (props) => {
  // Hide this if no slogan available
  // Import product slogan
  // Display based on whatever style is selected
  const { slogan } = props;

  return (
    <p>{slogan}</p>
  );
};

export default Slogan;
