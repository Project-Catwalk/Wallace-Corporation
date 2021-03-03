import React, { useState, useEffect } from 'react';

// Need to handle click of a new style updating thumbnail to main display, change sku_id for currently selected style that is used by size and quantity, and makes a checkmark appear on the selected style button
const StyleButtons = (props) => {
  const { styleName, skus } = props;
  const { name } = styleName;

  return (
    <button>{name}</button>
  );
};

export default StyleButtons;
