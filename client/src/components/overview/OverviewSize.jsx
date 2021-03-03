import React, { useState, useEffect } from 'react';

const Size = (props) => {
  // Import all possible sizes of a product
  // Import cart data to check count, if count = 0 disable button and label "OUT OF STOCK"
  // Map over sizes and place in an option
  const { stylesArr } = props;

  // CURRENTLY SET UP AS A HARDCODED RESULT TO MAP OVER

  let sizesArr = [];

  if (stylesArr.length > 0) {
    const sizeAndQuantity = stylesArr[0].skus;

    let arrOfSizeAndQuantityObjs = Object.values(sizeAndQuantity);

    for (let i = 0; i < arrOfSizeAndQuantityObjs.length; i++) {
      sizesArr.push(arrOfSizeAndQuantityObjs[i].size);
    }
  }

  const sizeOptions = sizesArr.map((productSize, sku_id) => (
    <option key={sku_id}>{productSize}</option>
  ));

  return (
    <select>
      {sizeOptions}
    </select>
  );
};

export default Size;
