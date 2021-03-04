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
  // const [listOfImgs, setListOfImgs] = useState([]);
  // const [imgIndex, setImgIndex] = useState(0);

  const defaultStyle = stylesArr.filter((style) => style['default?']);

  useEffect(() => {
    if (stylesArr.length > 0) {
      setStyleChoice(defaultStyle[0].name);
      setSkuOfChoice(defaultStyle[0].skus);
      setPhotos(defaultStyle[0].photos);
    }
  }, [stylesArr]);

  useEffect(() => {
    for (let i = 0; i < stylesArr.length; i++) {
      if (styleChoice === stylesArr[i].name) {
        setSkuOfChoice(stylesArr[i].skus);
        setOriginalPriceOfChoice(stylesArr[i].original_price);
        setSalePriceOfChoice(stylesArr[i].sale_price);
        setPhotos(stylesArr[i].photos);
      }
    }
  }, [styleChoice]);

  // useEffect(() => {
  //   const thumbnails = [];

  //   for (let i = 0; i < photos.length; i++) {
  //     thumbnails.push(photos[i].thumbnail_url);
  //   }

  //   setListOfImgs(thumbnails);
  //   setImgIndex(0);
  // }, [photos]);

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

    setStyleChoice(event.target.innerText);
  };

  // const thumbnailClickHandler = (event) => {
  //   event.preventDefault();

  //   console.log('evt: ', event.target);

  //   for (let i = 0; i < listOfImgs.length; i++) {
  //     console.log('listOfImgs[i]: ', listOfImgs[i]);
  //   }

  //   // setImgIndex(event.target.value);
  // };

  return (
    <>
      <div>
        <MainDisplay photos={photos} />
      </div>
      {/* <div>
        {listOfImgs.map((img, index) => <img className={styles.thumbnails} key={index} onClick={styleButtonHandler} src={img}/>)}
        {listOfImgs.map((img, index) => <input type="image" className={styles.thumbnails} key={listOfImgs[imgIndex]} onClick={thumbnailClickHandler} src={img}/>)}
      </div> */}
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
