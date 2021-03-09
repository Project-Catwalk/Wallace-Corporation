import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../../styleComponents/Overview.module.css';
import OverviewCartModal from './OverviewCartModal';


const OverviewSize = (props) => {
  // STILL TO DO:

  // Any style that has a quantity of 0 or null should not be listed in the size dropdown
  // If currentQuantityAvailable = 0 or null, set size selector to "OUT OF STOCK"
  // If "Select Size" is still present on size dropdown open size drop down and display message above drop down saying "Please select a size"
  // Make a "X" button to close cart

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

  // Line 43 is how to disable a button
  // function App() {

  //   const [name, setName] = useState('');
  //   const nameChange = e => setName(e.target.value);

  //   return (
  //     <div className="App">
  //       <input value={name} onChange={nameChange} placeholder="Name"/>
  //       <button disabled={!name}>Search</button>
  //     </div>
  //   );
  // }

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

    if (currentSize === 'Select Size') {
      // Create functionality to open select size dropdown and create a message above size dropdown saying "Please select a size"
      console.log('Please select a size');
    }

    setIsOpen(true);
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
      <select onChange={selectedSizeHandler} className={styles.sizeDropDown}>
        <option style={{paddingLeft: '5px'}}>Select Size</option>
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
        <OverviewCartModal open={isOpen} close={onClose}>
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
        {/* <OverviewCart currentSize={currentSize} countChosen={countChosen} singleSkuId={singleSkuId} styleChoice={styleChoice} name={name} /> */}
      </div>
      {/* <div>
        <OverviewQuantity currentQuantityAvailable={currentQuantityAvailable} currentSize={currentSize} singleSkuId={singleSkuId} styleChoice={styleChoice} name={name} />
      </div> */}
    </>
  );
};

export default OverviewSize;
