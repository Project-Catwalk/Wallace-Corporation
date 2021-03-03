import React, { useState, useEffect } from 'react';
import styles from '../../styleComponents/Overview.module.css';
import StyleButtons from './StyleButtons';
import OverviewSize from './OverviewSize';

const AllStylesForProduct = (props) => {
  // Map over all possible styles and place in a button
  // Keep the hardcoded "Style: ", but will need text update next to it depending on style selected
  // Make a checkmark overlay to indicate which button/style is currently selected
  // Ensure button is disabled after the first click and re-enables if another button is clicked
  // Ensure only one button can be selected at a time
  // Ensure a default style is selected on page load
  const { stylesArr, skus } = props;

  const [styleChoice, setStyleChoice] = useState('');

  const defaultStyle = stylesArr.filter((style) => style['default?']);

  useEffect(() => {
    if (stylesArr.length > 0) {
      setStyleChoice(defaultStyle[0].name);
    }
  }, [stylesArr]);

  // console.log('stylesArr in OverviewStyles: ', stylesArr);

  // has default? with one set to true and the rest to false
  // has name: for name of style
  // has photos array for thumbnail urls used to populate the thumbnails overlay
  // has a style_id number

  const sizesAndQuantities = [];

  const skuWithoutNumber = Object.values(skus);

  if (skuWithoutNumber.length > 0) {
    for (let i = 0; i < skuWithoutNumber.length; i++) {
      sizesAndQuantities.push(skuWithoutNumber[i]);
    }
  }

  return (
    <>
      <div className={styles.productStyles}>
        {stylesArr.map((styleName, index) => <StyleButtons styleName={styleName} />)}
      </div>
      <div className={styles.sizeDropDown}>
        <OverviewSize sizesAndQuantities={sizesAndQuantities} />
      </div>
    </>
  );

  // return (
  //   <>
  //     <div className={styles.productStyles}>
  //       {stylesArr.map((styleName, index) => <StyleButtons styleName={styleName} skus={skus} />)}
  //     </div>
  //     <div className={styles.sizeDropDown}>
  //       <OverviewSize sizes={keyAndSizes} />
  //     </div>
  //     <div className={styles.quantityDropDown}>
  //       <OverviewQuantity quan={keyAndQuan} />
  //     </div>
  //   </>
  // );
};

export default AllStylesForProduct;
