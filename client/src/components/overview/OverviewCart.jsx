import React, { useState, useEffect } from 'react';
import axios from 'axios';
import OverviewCartModal from './OverviewCartModal';

const OverviewCart = (props) => {
  // STILL TO DO:

  // If "Select Size" is still present on size dropdown open size drop down and display message above drop down saying "Please select a size"
  // Make a "X" button to close cart

  const { countChosen, currentSize, singleSkuId, styleChoice, name } = props;

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

    setIsOpen(false);
  };

  // const cartCheck = (event) => {
  //   // To make this work, will need to loop over results.data
  //   // Then, need to use the sku id to compare against stylesArr from parent/parent/parent component
  //   // Then, populate the fields
  //   // Then make a new close function that is just an X to get out of the modal without a post req
  //   event.preventDefault();

  //   axios
  //     .get('/cart')
  //     .then((results) => {
  //       console.log('Results: ', results);
  //     })
  //     .catch((error) => {
  //       console.log('Error: ', error);
  //     });

  //   setIsOpen(true);
  // };

  return (
    <>
      {sizeForCart !== 'OUT OF STOCK' && (<button onClick={handleCart}>Add to Cart</button>)}
      {/* <button onClick={cartCheck}>Check Cart</button> */}
      <OverviewCartModal open={isOpen} close={onClose}>
        <form>
          Item:
          <p>{name}</p>
          <br />
          Style:
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
