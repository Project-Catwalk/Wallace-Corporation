import React, { useState, useEffect } from 'react';

const OverviewQuantity = (props) => {
  // Import quantity
  // If quantity is greater than 15, only display 1-15
  // If less than 15 only display 1-whatever there is
  // Use map to add options with integers
  const { quantityForSize } = props;

  const [defaultQuan, setDefaultQuan] = useState('');

  useEffect(() => {
    setDefaultQuan('-');
    return (
      <select>
        {defaultQuan}
      </select>
    );
  }, []);

  let integers = [];

  if (quantityForSize > 15) {
    for (let i = 1; i <= 15; i++) {
      integers.push(i);
    }
  } else {
    for (let i = 1; i <= quantityForSize || i === 15; i++) {
      integers.push(i);
    }
  }

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

  return (
    <select>
      {integers.map((num, index) => <option key={index}>{num}</option>)}
    </select>
  );
};

export default OverviewQuantity;
