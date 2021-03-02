import React from 'react';

const Price = (props) => {
  // Import either the default_price or original_price depending on data received from get request
  // If sale_price is present and is greater than 0, display sale price in red
    // Strike through original price and place to the right of the sale price
  // Create a "Read all reviews" link to scroll down to the Reviews section
  const { default_price } = props;

  return (
    <p>{default_price}</p>
  );
};

export default Price;
