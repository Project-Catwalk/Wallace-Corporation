import React, { useState, useEffect } from 'react';
import OverviewQuantity from './OverviewQuantity';

const OverviewSize = (props) => {
  // Import all possible sizes of a product
  // Import cart data to check count, if count = 0 disable button and label "OUT OF STOCK"
  // Map over sizes and place in an option

  const { sizesAndQuantities } = props;

  const [currentSize, setCurrentSize] = useState('');
  const [currentQuantityAvailable, setCurrentQuantityAvailable] = useState(0);

  const selectedSizeHandler = (event) => {
    event.preventDefault();

    for (let i = 0; i < sizesAndQuantities.length; i++) {
      if (event.target.value === sizesAndQuantities[i].size) {
        setCurrentQuantityAvailable(sizesAndQuantities[i].quantity);
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

  return (
    <div>
      <select onChange={selectedSizeHandler} defaultValue="Select Size">
        {sizesAndQuantities.map((productSize, index) => (
          <option key={index}>{productSize.size}</option>
        ))}
      </select>
      <div>
        <OverviewQuantity quantityForSize={currentQuantityAvailable} currentSize={currentSize} />
      </div>
    </div>
  );
};

export default OverviewSize;
