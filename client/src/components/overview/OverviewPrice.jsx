import React, { useState, useEffect } from 'react';

const Price = (props) => {
  // Import either the default_price or original_price depending on data received from get request
  // If sale_price is present and is greater than 0, display sale price in red
    // Strike through original price and place to the right of the sale price
  // Create a "Read all reviews" link to scroll down to the Reviews section

  const { stylesArr } = props;
  // stylesArr has an original price and a sales price

  // Need to manage state of original vs sale here, not in overview

  const [price, setPrice] = useState('');

  // useEffect(() => {
  //   setPrice(normalPrice);
  // }, []);

  let normalPrice;

  if (stylesArr.length > 0) {
    normalPrice = stylesArr[0].original_price;
  }

  return (
    <p>{normalPrice}</p>
  );
};

export default Price;
