import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../../styleComponents/Overview.module.css';
import OverviewCartModal from './OverviewCartModal';

const OverviewSize = (props) => {
  // STILL TO DO:

  // Clicking "Add to Cart" when size isn't selected should open the size dropdown

  const { skuOfChoice, styleChoice, name } = props;

  const [currentSize, setCurrentSize] = useState('');
  const [currentQuantityAvailable, setCurrentQuantityAvailable] = useState(null);
  const [singleSkuId, setSingleSkuId] = useState('');
  const [allSizesAndQuantities, setAllSizesAndQuantities] = useState([]);
  const [allSkuIds, setAllSkuIds] = useState([]);
  const [quantityAvailable, setQuantityAvailable] = useState([]);
  const [countChosen, setCountChosen] = useState(1);
  const [sku_id, setSku_id] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [cartButtonClicked, setCartButtonClicked] = useState(false);

  useEffect(() => {
    const skuWithoutNumber = Object.values(skuOfChoice);

    const skuIdsOfChoice = Object.keys(skuOfChoice);

    const sizesAndQuantities = [];

    const skuIds = [];

    if (skuWithoutNumber.length > 0) {
      for (let i = 0; i < skuWithoutNumber.length; i++) {
        sizesAndQuantities.push(skuWithoutNumber[i]);
      }
    }

    if (skuIdsOfChoice.length > 0) {
      for (let i = 0; i < skuIdsOfChoice.length; i++) {
        skuIds.push(skuIdsOfChoice[i]);
      }
    }
    setCartButtonClicked(false);
    setCurrentSize('Select Size');
    setAllSizesAndQuantities(sizesAndQuantities);
    setAllSkuIds(skuIds);
  }, [skuOfChoice, styleChoice]);

  const selectedSizeHandler = (event) => {
    event.preventDefault();

    for (let i = 0; i < allSizesAndQuantities.length; i++) {
      if (allSizesAndQuantities[i].quantity === 0) {
        continue;
      } else if (event.target.value === allSizesAndQuantities[i].size) {
        setCurrentQuantityAvailable(allSizesAndQuantities[i].quantity);
        setSingleSkuId(allSkuIds[i]);
      }
    }

    setCurrentSize(event.target.value);
  };

  useEffect(() => {
    if (currentQuantityAvailable === null) {
      return (
        <div>
          <select disabled>
            <option>OUT OF STOCK</option>
          </select>
        </div>
      );
    }
  }, [currentQuantityAvailable]);

  useEffect(() => {
    const integers = [];

    if (currentQuantityAvailable > 15) {
      for (let i = 1; i <= 15; i++) {
        integers.push(i);
      }
    } else {
      for (let i = 1; i <= currentQuantityAvailable || i === 15; i++) {
        integers.push(i);
      }
    }

    setQuantityAvailable(integers);
  }, [currentQuantityAvailable]);

  const quantitySelected = (event) => {
    event.preventDefault();

    for (let i = 0; i < quantityAvailable.length; i++) {
      if (parseInt(event.target.value) === quantityAvailable[i]) {
        setCountChosen(parseInt(event.target.value));
      }
    }
  };

  useEffect(() => {
    // if (currentSize === 'OUT OF STOCK') {
    //   setSizeForCart('OUT OF STOCK');
    // }
    // setCount(countChosen);
    // setSizeForCart(currentSize);
    setSku_id(parseInt(singleSkuId));
  }, [currentSize, countChosen, singleSkuId]);

  const handleCart = (event) => {
    event.preventDefault();

    setCartButtonClicked(true);

    if (currentSize !== 'Select Size') {
      setIsOpen(true);
    }
  };

  const onClose = (event) => {
    event.preventDefault();

    axios
      .post('/cart', { sku_id: `${sku_id}`, count: `${countChosen}` })
      .then((status) => {
        console.log('Status: ', status);
      })
      .catch((error) => {
        console.log('Error: ', error);
      });

    setIsOpen(false);
    setCartButtonClicked(false);
  };

  const exitCart = (event) => {
    event.preventDefault();

    setIsOpen(false);
    setCartButtonClicked(false);
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
      {(currentSize === 'Select Size' && cartButtonClicked === true)
        ? (
          <div className={styles.hiddenCartSentence}>Please select a size</div>
        )
        : null}
      <select onChange={selectedSizeHandler} className={styles.sizeDropDown}>
        <option style={{ paddingLeft: '5px' }}>Select Size</option>
        {allSizesAndQuantities.map((productSize, index) => (
          <option key={index}>{productSize.size}</option>
        ))}
      </select>
      <select onChange={quantitySelected} className={styles.quantityDropDown}>
        <option disabled>-</option>
        {quantityAvailable.map((num, index) => <option key={index}>{num}</option>)}
      </select>
      <div className={styles.cart}>
        {currentSize !== 'OUT OF STOCK' && (<button onClick={handleCart}>Add to Cart</button>)}
        {/* <button onClick={cartCheck}>Check Cart</button> */}
        <OverviewCartModal open={isOpen} close={onClose} exitCart={exitCart}>
          <form>
            Item:
            <p>{name}</p>
            <br />
            Style:
            <p>{styleChoice}</p>
            <br />
            Size:
            <p>{currentSize}</p>
            <br />
            Quantity:
            <p>{countChosen}</p>
          </form>
        </OverviewCartModal>
      </div>
    </>
  );
};

export default OverviewSize;
