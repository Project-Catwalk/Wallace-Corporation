import React, { useState, useEffect } from 'react';
import styles from '../../styleComponents/Overview.module.css';
import ReviewStars from './OverviewRatingsDisplay';
import OverviewSize from './OverviewSize';
import MainDisplay from './OverviewMainDisplay';

const Overview = (props) => {
  const { overview, productStyles, average } = props;
  const { category, description, name, slogan } = overview;

  const [styleChoice, setStyleChoice] = useState('');
  const [skuOfChoice, setSkuOfChoice] = useState({});
  const [originalPriceOfChoice, setOriginalPriceOfChoice] = useState('');
  const [salePriceOfChoice, setSalePriceOfChoice] = useState('');
  const [photos, setPhotos] = useState([]);
  const [thumbnailPhotos, setThumbnailPhotos] = useState([]);

  const defaultStyle = productStyles.filter((style) => style['default?']);

  useEffect(() => {
    if (productStyles.length > 0) {
      setStyleChoice(defaultStyle[0].name);
      setSkuOfChoice(defaultStyle[0].skus);
      setPhotos(defaultStyle[0].photos);

      const thumbnails = [];

      for (let i = 0; i < productStyles.length; i++) {
        thumbnails.push(productStyles[i].photos);
      }

      setThumbnailPhotos(thumbnails);
    }
  }, [productStyles]);

  useEffect(() => {
    for (let i = 0; i < productStyles.length; i++) {
      if (styleChoice === productStyles[i].name) {
        setSkuOfChoice(productStyles[i].skus);
        setOriginalPriceOfChoice(productStyles[i].original_price);
        setSalePriceOfChoice(productStyles[i].sale_price);
        setPhotos(productStyles[i].photos);
      }
    }
  }, [styleChoice]);

  const styleButtonNames = [];

  if (productStyles.length > 0) {
    for (let i = 0; i < productStyles.length; i++) {
      styleButtonNames.push(productStyles[i].name);
    }
  }

  const styleButtonHandler = (event) => {
    event.preventDefault();

    for (let i = 0; i < productStyles.length; i++) {
      if (event.target.src === productStyles[i].photos[0].thumbnail_url) {
        setStyleChoice(productStyles[i].name);
      }
    }
  };

  const setPriceDisplay = () => {
    if (salePriceOfChoice !== null) {
      return (
        salePriceOfChoice
      );
    }

    return (
      originalPriceOfChoice
    );
  };

  return (
    <div className={styles.overviewWrapper}>
      <div className={styles.reviews}>
        <ReviewStars />
      </div>
      <div className={styles.productCategory}>
        {category}
      </div>
      <div className={styles.productTitle}>
        {name}
      </div>
      <div>
        <MainDisplay photos={photos} styleChoice={styleChoice} />
      </div>
      <div className={styles.productPrice}>
        <p>{setPriceDisplay()}</p>
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
      <div className={styles.relatedProducts}>
        <a target="_blank" rel="noreferrer" href="https://rpggeek.com/rpg/3168/unofficial-blade-runner-roleplaying-game">
          <button type="submit">Related Products</button>
        </a>
      </div>
      <div className={styles.slogan}>
        {slogan !== null && (<p>{slogan}</p>)}
      </div>
      <div className={styles.productDescription}>
        {description !== null && (<p>{description}</p>)}
      </div>
      <div className={styles.socialMedia}>
        <a target="_blank" rel="noreferrer" href="https://www.facebook.com/BladeRunner.original1982/">
          <button type="submit">Facebook</button>
        </a>
        <a target="_blank" rel="noreferrer" href="https://twitter.com/bladerunner">
          <button type="submit">Twitter</button>
        </a>
        <a target="_blank" rel="noreferrer" href="https://www.pinterest.com/umbersun/blade-runner/">
          <button type="submit">Pinterest</button>
        </a>
      </div>
    </div>
  );
};

export default Overview;
