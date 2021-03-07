import React, { useState, useEffect } from 'react';

const OverviewPrice = (props) => {
  // STILL TO DO:

  // If sale price is present, style to be red color and shift the normal price to the right
  // Strike through normal price

  const { normalPrice, salePrice } = props;

  if (salePrice !== null) {
    return (
      <p>{salePrice}</p>
    );
  }

  return (
    <p>{normalPrice}</p>
  );
};

export default OverviewPrice;
