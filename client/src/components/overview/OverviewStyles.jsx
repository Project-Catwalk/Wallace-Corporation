import React from 'react';

const StylesButtons = (props) => {
  // Map over all possible styles and place in a button
  // Keep the hardcoded "Style: ", but will need text update next to it depending on style selected
  // Make a checkmark overlay to indicate which button/style is currently selected
  // Ensure button is disabled after the first click and re-enables if another button is clicked
  // Ensure only one button can be selected at a time
  // Ensure a default style is selected on page load
  const { stylesArr } = props;

  // console.log('stylesArr in OverviewStyles: ', stylesArr);

  // has default? with one set to true and the rest to false
  // has name: for name of style
  // has original_price and sale_price
  // has photos array for thumbnail urls
  // has skus that has sku_id(I think?) followed by an object with quantity and size
  // has a style_id number

  return <button>1</button>
};

export default StylesButtons;
