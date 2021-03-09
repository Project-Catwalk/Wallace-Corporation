import React, { useState, useEffect } from 'react';
import styles from '../../styleComponents/Overview.module.css';
import ReviewStars from './OverviewRatingsDisplay';
import OverviewSize from './OverviewSize';
import MainDisplay from './OverviewMainDisplay';
import OverviewCheckmark from './OverviewCheckmark';

const Overview = (props) => {
  // STILL TO DO:

  // Style the sale price conditional to be red text and display normal price struck through
  // Set checkmark svg to render on whatever style button has been clicked

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

    // CHECKMARK SVG:
  // <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  //   <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  //   <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
  // </svg>;

  return (
    <div>
      <div className={styles.overviewDisplay}>
        <div>
          <MainDisplay photos={photos} styleChoice={styleChoice} />
        </div>
        <div className={styles.slogan}>
          {slogan !== null && (<p>{slogan}</p>)}
        </div>
        <div className={styles.rightColumn}>
          <div className={styles.reviews}>
            <ReviewStars average={average} />
          </div>
          <div className={styles.productCategory}>
            {category}
          </div>
          <div className={styles.productTitle}>
            {name}
          </div>
          <div className={styles.productPrice}>
            <p>{setPriceDisplay()}</p>
          </div>
          <div style={{ paddingLeft: '5px' }}>Style: {styleChoice}</div>
          <div className={styles.productStyles}>
            {thumbnailPhotos.map((styleNamePic, index) =>
              <OverviewCheckmark styleNamePic={styleNamePic} styleButtonHandler={styleButtonHandler} styleChoice={styleChoice} key={index.toString()} />)};
          </div>
          <div>
            <OverviewSize skuOfChoice={skuOfChoice} styleChoice={styleChoice} name={name} />
          </div>
        </div>
      </div>
      <div className={styles.overviewFooter}>
        <div className={styles.relatedProducts}>
          <a target="_blank" rel="noreferrer" href="https://rpggeek.com/rpg/3168/unofficial-blade-runner-roleplaying-game">
            <button type="submit">Related Products</button>
          </a>
        </div>
        <div className={styles.socialMedia}>
          <a target="_blank" rel="noreferrer" href="https://www.facebook.com/BladeRunner.original1982/">
            <button type="submit" style={{ marginBottom: '2px' }}>
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
              </svg>
            </button>
          </a>
          <a target="_blank" rel="noreferrer" href="https://twitter.com/bladerunner">
            <button type="submit" style={{ marginBottom: '2px' }}>
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
              </svg>
            </button>
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.pinterest.com/umbersun/blade-runner/">
            <button type="submit" style={{ marginBottom: '2px' }}>
              <svg id="Bold" enable-background="new 0 0 24 24" height="16" viewBox="0 0 24 24" width="16">
                <path d="m12.326 0c-6.579.001-10.076 4.216-10.076 8.812 0 2.131 1.191 4.79 3.098 5.633.544.245.472-.054.94-1.844.037-.149.018-.278-.102-.417-2.726-3.153-.532-9.635 5.751-9.635 9.093 0 7.394 12.582 1.582 12.582-1.498 0-2.614-1.176-2.261-2.631.428-1.733 1.266-3.596 1.266-4.845 0-3.148-4.69-2.681-4.69 1.49 0 1.289.456 2.159.456 2.159s-1.509 6.096-1.789 7.235c-.474 1.928.064 5.049.111 5.318.029.148.195.195.288.073.149-.195 1.973-2.797 2.484-4.678.186-.685.949-3.465.949-3.465.503.908 1.953 1.668 3.498 1.668 4.596 0 7.918-4.04 7.918-9.053-.016-4.806-4.129-8.402-9.423-8.402z" />
              </svg>
            </button>
          </a>
        </div>
        <div className={styles.productDescription}>
          {description !== null && (<p>{description}</p>)}
        </div>
      </div>
    </div>
  );
};

export default Overview;
