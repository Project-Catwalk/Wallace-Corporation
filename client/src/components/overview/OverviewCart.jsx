import React, { useState, useEffect } from 'react';

const OverviewCart = (props) => {
  // Check if size says "OUT OF STOCK", if so, hide this button
  // Check if valid size and quantity are selected
  // If it is, add to cart functionality should happen
  // If not, open size drop down and display message above drop down saying "Please select size"
  const { currentQuantity, currentSize } = props;

  // {imgIndex !== 0 && (<button type="submit" onClick={decrementImgIndex}>Left</button>)}
  //   <img src={displayedImg} onClick={expandView} alt={styleChoice}/>

  const [quantityForCart, setQuantityForCart] = useState(0);
  const [sizeForCart, setSizeForCart] = useState('');

  useEffect(() => {
    if (currentSize === 'OUT OF STOCK') {
      setSizeForCart('OUT OF STOCK');
    }
    setQuantityForCart(currentQuantity);
    setSizeForCart(currentSize);
  }, [currentSize, currentQuantity]);

  const handleCart = (event) => {
    event.preventDefault();

    if (currentSize === 'Select Size') {
      // Create functionality to open select size dropdown and create a message above size dropdown saying "Please select a size"
      console.log('Please select a size');
    }

    console.log('Added Item to Cart');
  };

  return (
    <>
      {sizeForCart !== 'OUT OF STOCK' && (<button onClick={handleCart}>Add to Cart</button>)}
    </>
  );
};

export default OverviewCart;
