import React, { useState, useEffect } from 'react';
import styles from '../../styleComponents/Overview.module.css';
import OverviewSize from './OverviewSize';
import Price from './OverviewPrice';
import MainDisplay from './OverviewMainDisplay';

const OverviewStyles = (props) => {
  // Map over all possible styles and place in a button
  // Keep the hardcoded "Style: ", but will need text update next to it depending on style selected
  // Make a checkmark overlay to indicate which button/style is currently selected
  // Ensure button is disabled after the first click and re-enables if another button is clicked
  // Ensure only one button can be selected at a time
  // Ensure a default style is selected on page load
  const { stylesArr } = props;

  const [styleChoice, setStyleChoice] = useState('');
  const [skuOfChoice, setSkuOfChoice] = useState({});
  const [originalPriceOfChoice, setOriginalPriceOfChoice] = useState('');
  const [salePriceOfChoice, setSalePriceOfChoice] = useState('');
  const [photos, setPhotos] = useState([]);
  // const [defaultToDisplay, setDefaultToDisplay] = useState([]);

  const defaultStyle = stylesArr.filter((style) => style['default?']);

  useEffect(() => {
    if (stylesArr.length > 0) {
      // setDefaultToDisplay(defaultStyle);
      setStyleChoice(defaultStyle[0].name);
      setSkuOfChoice(defaultStyle[0].skus);
      setPhotos(defaultStyle[0].photos);
      console.log('photos in Styles useEffect: ', photos);
    }
  }, [stylesArr]);

  // if (styleChoice === stylesArr[i].name) {
  //   const skus = []; // <-- arr key value pairs with value = obj
  //   const startPrice = [];
  //   const onSalePrice = [];
  //   const photosForThisStyle = [];

  //   for (let i = 0; i < stylesArr.length; i++) {
  //     skus.push(stylesArr[i].skus);
  //     startPrice.push(stylesArr[i].original_price);
  //     onSalePrice.push(stylesArr[i].sale_price);
  //     photosForThisStyle.push(stylesArr[i].photos);
  //   }

  //   setSkuOfChoice(skus);
  //   setOriginalPriceOfChoice(startPrice);
  //   setSalePriceOfChoice(onSalePrice);
  //   setPhotos(photosForThisStyle);
  // }

  const sizesAndQuantities = [];

  const skuWithoutNumber = Object.values(skuOfChoice);

  if (skuWithoutNumber.length > 0) {
    for (let i = 0; i < skuWithoutNumber.length; i++) {
      sizesAndQuantities.push(skuWithoutNumber[i]);
    }
  }

  const styleButtonNames = [];

  if (stylesArr.length > 0) {
    for (let i = 0; i < stylesArr.length; i++) {
      styleButtonNames.push(stylesArr[i].name);
    }
  }

  const styleButtonHandler = (event) => {
    event.preventDefault();

    setStyleChoice(event.target.innerHTML);
  };

  useEffect(() => {
    for (let i = 0; i < stylesArr.length; i++) {
      if (styleChoice === stylesArr[i].name) {
        setSkuOfChoice(stylesArr[i].skus);
        setOriginalPriceOfChoice(stylesArr[i].original_price);
        setSalePriceOfChoice(stylesArr[i].sale_price);
        setPhotos(stylesArr[i].photos);
      }
    }
  });

  return (
    <>
      <div>
        <MainDisplay photos={photos} />
      </div>
      <div className={styles.productPrice}>
        <Price normalPrice={originalPriceOfChoice} salePrice={salePriceOfChoice} />
      </div>
      <div className={styles.productStyles}>
        <label>
          Style:
          {styleButtonNames.map((styleName, index) => <button key={index} onClick={styleButtonHandler}>{styleName}</button>)}
        </label>
      </div>
      <div className={styles.sizeDropDown}>
        <OverviewSize sizesAndQuantities={sizesAndQuantities} />
      </div>
    </>
  );
};

export default OverviewStyles;
