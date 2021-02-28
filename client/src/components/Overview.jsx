import React from 'react';
import styles from '../styleComponents/Overview.module.css';
import MainDisplay from './OverviewMainDisplay';
import ReviewStars from './OverviewRatingsDisplay';
import Category from './OverviewCategory';
import Product from './OverviewProductTitle';
import Price from './OverviewPrice';
import StylesButtons from './OverviewStyles';
import Size from './OverviewSize';
import Quantity from './OverviewQuantity';
import AddToCart from './OverviewCart';
import RelatedProducts from './OverviewRelatedProducts';
import Description from './OverviewProductDescription';
import Slogan from './OverviewProductSlogan';

const Overview = () => (
  <div className={styles.wrapper}>
    <div className={styles.mainDisplay}>
      <MainDisplay />
    </div>
    <div className={styles.reviews}>
      <ReviewStars />
    </div>
    <div className={styles.productCategory}>
      <Category />
    </div>
    <div className={styles.productTitle}>
      <Product />
    </div>
    <div className={styles.productPrice}>
      <Price />
    </div>
    <div className={styles.productStyles}>
      Style:
      <StylesButtons />
    </div>
    <select className={styles.sizeDropDown}>
      <Size />
    </select>
    <select className={styles.quantityDropDown}>
      <Quantity />
    </select>
    <div className={styles.cart}>
      <AddToCart />
    </div>
    <div className={styles.relatedProducts}>
      <RelatedProducts />
    </div>
    <div className={styles.slogan}>
      <Slogan />
    </div>
    <div className={styles.productDescription}>
      <Description />
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

export default Overview;
