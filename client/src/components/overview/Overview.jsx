import React, { useState, useEffect } from 'react';
import styles from '../../styleComponents/Overview.module.css';
import MainDisplay from './OverviewMainDisplay';
import ReviewStars from './OverviewRatingsDisplay';
import Category from './OverviewCategory';
import Product from './OverviewProductTitle';
import Price from './OverviewPrice';
import OverviewStyles from './OverviewStyles';
import Size from './OverviewSize';
import Quantity from './OverviewQuantity';
import AddToCart from './OverviewCart';
import RelatedProducts from './OverviewRelatedProducts';
import Description from './OverviewProductDescription';
import Slogan from './OverviewProductSlogan';

const Overview = (props) => {
  const { overview, productStyles, relatedProducts } = props;
  const { category, description, name, slogan } = overview;

  const [skus, setSkus] = useState({});
  const [photos, setPhotos] = useState([]);


  // const testFunction = () => {
  //   if (productStyles.length > 0) {
  //     const listOfSkus = productStyles[0].skus;
  //     console.log('listOfSkus: ', listOfSkus);
  //     setSkus(listOfSkus);
  //   }
  // };
  useEffect(() => {
    if (productStyles.length > 0) {
      const listOfSkus = productStyles[0].skus;
      console.log('listOfSkus: ', listOfSkus);
      setSkus(listOfSkus);
    }
  }, [productStyles]);

  // state will need to include skus from styles
    // this will need to include a function make a key the value of the sku_id
    // click handler will use the sku_id to make sure the size and quantity drop downs sync up
  // Need a state to take care of style, so that when a new style is clicked it influences size, price, and style components

  return (
    <div className={styles.wrapper}>
      <div className={styles.mainDisplay}>
        <MainDisplay stylesArr={productStyles} />
      </div>
      <div className={styles.reviews}>
        <ReviewStars />
      </div>
      <div className={styles.productCategory}>
        <Category category={category} />
      </div>
      <div className={styles.productTitle}>
        <Product name={name} />
      </div>
      <div className={styles.productPrice}>
        <Price stylesArr={productStyles} />
      </div>
      <div className={styles.productStyles}>
        Style:
        <OverviewStyles stylesArr={productStyles} />
      </div>
      <div className={styles.sizeDropDown}>
        <Size stylesArr={productStyles} />
      </div>
      <div className={styles.quantityDropDown}>
        <Quantity stylesArr={productStyles} />
      </div>
      <div className={styles.cart}>
        <AddToCart />
      </div>
      <div className={styles.relatedProducts}>
        <RelatedProducts relatedArr={relatedProducts} />
      </div>
      <div className={styles.slogan}>
        <Slogan slogan={slogan} />
      </div>
      <div className={styles.productDescription}>
        <Description description={description} />
      </div>
      <div className={styles.socialMedia}>
        <a href="https://www.facebook.com/BladeRunner.original1982/">
          <button type="submit">Facebook</button>
        </a>
        <a href="https://twitter.com/bladerunner">
          <button type="submit">Twitter</button>
        </a>
        <a href="https://www.pinterest.com/umbersun/blade-runner/">
          <button type="submit">Pinterest</button>
        </a>
      </div>
    </div>
  );
};

export default Overview;
