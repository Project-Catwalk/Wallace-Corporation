import React, { useState, useEffect } from 'react';

const Quantity = (props) => {
  // Import quantity
  // If quantity is greater than 15, only display 1-15
  // If less than 15 only display 1-whatever there is
  // Use map to add options with integers
  const { stylesArr } = props;

  let quantityArr = [];

  if (stylesArr.length > 0) {
    const sizeAndQuantity = stylesArr[0].skus;

    let arrOfSizeAndQuantityObjs = Object.values(sizeAndQuantity);

    for (let i = 0; i < arrOfSizeAndQuantityObjs.length; i++) {
      quantityArr.push(arrOfSizeAndQuantityObjs[i].quantity);
    }
  }

  const quantityOptions = quantityArr.map((productQuantity, sku_id) => (
    <option key={sku_id}>{productQuantity}</option>
  ));

  return (
    <select>
      {quantityOptions}
    </select>
  );
};

export default Quantity;
