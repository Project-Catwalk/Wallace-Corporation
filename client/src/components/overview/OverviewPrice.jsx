import React from 'react';

const Price = (props) => {
  // Import either the default_price or original_price depending on data received from get request
  // If sale_price is present and is greater than 0, display sale price in red
    // Strike through original price and place to the right of the sale price
  // Create a "Read all reviews" link to scroll down to the Reviews section
  const { stylesArr } = props;
  // stylesArr has an original price and a sales price

  // WHY DOES THIS WORK, BUT stylesArr[0].original_price throws an error?!?!
  let normalPrice;

  for (let i = 0; i < stylesArr.length; i++) {
    normalPrice = stylesArr[i].original_price;
  }
  // console.log('normalPrice: ', normalPrice);

  return (
    <p>{normalPrice}</p>
  );
};

export default Price;
