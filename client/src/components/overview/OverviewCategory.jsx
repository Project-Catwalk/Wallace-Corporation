import React from 'react';

const Category = (props) => {
  // Pull in category information from product id received from get request
  const { category } = props;

  return (
    <p>{category}</p>
  );
};

export default Category;
