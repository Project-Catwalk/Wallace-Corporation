import React, { useState, useEffect } from 'react';
import styles from '../../styleComponents/Overview.module.css';
import OverviewSize from './OverviewSize';
import Price from './OverviewPrice';
import MainDisplay from './OverviewMainDisplay';

const OverviewStyles = (props) => {
  // STILL TO DO:

  // Turn style buttons into the default image of the selected style
  // Need a checkmark overlay on the style button that is currently selected

  const { stylesArr, name } = props;

  const [styleChoice, setStyleChoice] = useState('');
  const [skuOfChoice, setSkuOfChoice] = useState({});
  const [originalPriceOfChoice, setOriginalPriceOfChoice] = useState('');
  const [salePriceOfChoice, setSalePriceOfChoice] = useState('');
  const [photos, setPhotos] = useState([]);
  const [thumbnailPhotos, setThumbnailPhotos] = useState([]);

  const defaultStyle = stylesArr.filter((style) => style['default?']);

  useEffect(() => {
    if (stylesArr.length > 0) {
      setStyleChoice(defaultStyle[0].name);
      setSkuOfChoice(defaultStyle[0].skus);
      setPhotos(defaultStyle[0].photos);

      const thumbnails = [];

      for (let i = 0; i < stylesArr.length; i++) {
        thumbnails.push(stylesArr[i].photos);
      }

      setThumbnailPhotos(thumbnails);
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

  const styleButtonNames = [];

  if (stylesArr.length > 0) {
    for (let i = 0; i < stylesArr.length; i++) {
      styleButtonNames.push(stylesArr[i].name);
    }
  }

  const styleButtonHandler = (event) => {
    event.preventDefault();

    for (let i = 0; i < stylesArr.length; i++) {
      if (event.target.src === stylesArr[i].photos[0].thumbnail_url) {
        setStyleChoice(stylesArr[i].name);
      }
    }
  };

  return (
    <>
      <div>
        <MainDisplay photos={photos} styleChoice={styleChoice} />
      </div>
      <div className={styles.productPrice}>
        <Price normalPrice={originalPriceOfChoice} salePrice={salePriceOfChoice} />
      </div>
      <div className={styles.productStyles}>
        Style: {styleChoice}
        {thumbnailPhotos.map((styleNamePic, index) =>
          <img className={styles.stylesButtonsImgs}
            key={index.toString()} onClick={styleButtonHandler}
            src={styleNamePic[0].thumbnail_url} alt={styleChoice} />)}
      </div>
      <div className={styles.sizeDropDown}>
        <OverviewSize skuOfChoice={skuOfChoice} styleChoice={styleChoice} name={name} />
      </div>
    </>
  );
};

export default OverviewStyles;
