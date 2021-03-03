import React, { useState, useEffect } from 'react';
import OverviewQuantity from './OverviewQuantity';

const OverviewSize = (props) => {
  // Import all possible sizes of a product
  // Import cart data to check count, if count = 0 disable button and label "OUT OF STOCK"
  // Map over sizes and place in an option

  const { sizesAndQuantities } = props;

  const [defaultString, setDefaultString] = useState('');
  const [currentSize, setcurrentSize] = useState('');
  const [currentQuantityAvailable, setcurrentQuantityAvailable] = useState('');

  useEffect(() => {
    setDefaultString('Select Size');
  }, []);

  // On click handler to set state, then pass whatever is in state down to quantity


  const sizeOptions = sizesAndQuantities.map((productSize, index) => (
    <option key={index}>{productSize.size}</option>
  ));

  return (
    <div>
      <select>
        {sizeOptions}
      </select>
      <div>
        <OverviewQuantity quan={keyAndQuan} />
      </div>
    </div>
  );
};

export default OverviewSize;
