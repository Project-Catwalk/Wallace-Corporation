import React, { useState, useEffect } from 'react';

const OverviewQuantity = (props) => {
  // Import quantity
  // If quantity is greater than 15, only display 1-15
  // If less than 15 only display 1-whatever there is
  // Use map to add options with integers
  const { quan } = props;

  const [defaultQuan, setDefaultQuan] = useState('');

  useEffect(() => {
    setDefaultQuan('-');
  }, []);

  return (
    <select>
      1
    </select>
  );

  // console.log('quan on quantity: ', quan);

  // let quantityArr = [];

  // if (quan.length > 0) {
  //   for (let i = 0; i < quan.length; i++) {
  //     let quantityForOneSize = Object.entries(quan[i]);
  //     quantityArr.push(quantityForOneSize[i]);
  //   }
  // }

  // console.log(quantityArr);

  // const quantityOptions = quantityArr.map((productQuantity) => (
  //   <option key={sku_id}>{productQuantity}</option>
  // ));

  // return (
  //   <select>
  //     {quantityOptions}
  //   </select>
  // );
};

export default OverviewQuantity;
