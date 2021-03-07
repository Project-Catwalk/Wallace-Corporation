import React, { useState, useEffect } from 'react';
import axios from 'axios';
import OverviewCartModal from './OverviewCartModal';

const OverviewCart = (props) => {
  // Check if size says "OUT OF STOCK", if so, hide this button
  // Check if valid size and quantity are selected
  // If it is, add to cart functionality should happen
  // If not, open size drop down and display message above drop down saying "Please select size"
  const { countChosen, currentSize, singleSkuId, styleChoice } = props;

  // {imgIndex !== 0 && (<button type="submit" onClick={decrementImgIndex}>Left</button>)}
  //   <img src={displayedImg} onClick={expandView} alt={styleChoice}/>

  const [count, setCount] = useState(0);
  const [sizeForCart, setSizeForCart] = useState('');
  const [sku_id, setSku_id] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (currentSize === 'OUT OF STOCK') {
      setSizeForCart('OUT OF STOCK');
    }
    setCount(countChosen);
    setSizeForCart(currentSize);
    setSku_id(parseInt(singleSkuId));
  }, [currentSize, countChosen, singleSkuId]);

  const handleCart = (event) => {
    event.preventDefault();

    if (currentSize === 'Select Size') {
      // Create functionality to open select size dropdown and create a message above size dropdown saying "Please select a size"
      console.log('Please select a size');
    }

    setIsOpen(true);
  };

  const onClose = (event) => {
    event.preventDefault();

    axios
      .post('/cart', { sku_id: `${sku_id}`, count: `${count}` })
      .then((status) => {
        console.log('Status: ', status);
      })
      .catch((error) => {
        console.log('Error: ', error);
      });

    axios
      .get('/cart')
      .then((results) => {
        console.log('Results: ', results);
      })
      .catch((error) => {
        console.log('Error: ', error);
      });

    setIsOpen(false);
  };

  return (
    <>
      {sizeForCart !== 'OUT OF STOCK' && (<button onClick={handleCart}>Add to Cart</button>)}
      <OverviewCartModal open={isOpen} close={onClose}>
        <form>
          Item:
          <p>{styleChoice}</p>
          <br />
          Size:
          <p>{sizeForCart}</p>
          <br />
          Quantity:
          <p>{count}</p>
        </form>
      </OverviewCartModal>
    </>
  );
};

export default OverviewCart;
