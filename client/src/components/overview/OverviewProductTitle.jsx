import React from 'react';

const Product = (props) => {
  // Pull in title of product from product id received from get request
  const { name } = props;
  return (
    <h2>{name}</h2>
  );
};

export default Product;
