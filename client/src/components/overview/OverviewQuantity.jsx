import React, { useState, useEffect } from 'react';
import OverviewCart from './OverviewCart';
import styles from '../../styleComponents/Overview.module.css';

const OverviewQuantity = (props) => {
  // Import quantity
  // If quantity is greater than 15, only display 1-15
  // If less than 15 only display 1-whatever there is
  // Use map to add options with integers
  const { quantityForSize, currentSize, singleSkuId, styleChoice } = props;

  const [quantityAvailable, setQuantityAvailable] = useState([]);
  const [countChosen, setCountChosen] = useState(0);

  useEffect(() => {
    const integers = [];

    if (quantityForSize > 15) {
      for (let i = 1; i <= 15; i++) {
        integers.push(i);
      }
    } else {
      for (let i = 1; i <= quantityForSize || i === 15; i++) {
        integers.push(i);
      }
    }

    setQuantityAvailable(integers);
  }, [quantityForSize]);

  // if (defaultQuan === '-') {
  //   return (
  //     <select>
  //       -
  //     </select>
  //   );
  // }

  // Line 57 is how to disable a button
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

  const quantitySelected = (event) => {
    event.preventDefault();

    for (let i = 0; i < quantityAvailable.length; i++) {
      if (parseInt(event.target.value) === quantityAvailable[i]) {
        setCountChosen(parseInt(event.target.value));
      }
    }
  };

  return (
    <>
      <select onChange={quantitySelected}>
        <option>-</option>
        {quantityAvailable.map((num, index) => <option key={index}>{num}</option>)}
      </select>
      <div className={styles.cart}>
        <OverviewCart currentSize={currentSize} countChosen={countChosen} singleSkuId={singleSkuId} styleChoice={styleChoice} />
      </div>
    </>
  );
};

export default OverviewQuantity;
