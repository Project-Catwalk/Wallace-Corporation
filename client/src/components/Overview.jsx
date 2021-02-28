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

const Overview = () => (
  <div className={styles.wrapper}>
    <div className={styles.one}>
      <MainDisplay />
    </div>
    <div className={styles.two}>
      <ReviewStars />
    </div>
    <div className={styles.three}>
      <Category />
    </div>
    <div className={styles.four}>
      <Product />
    </div>
    <div className={styles.five}>
      <Price />
    </div>
    <div className={styles.nine}>
      Style:
      <StylesButtons />
    </div>
    {/* <div className={styles.six}>This is for styles buttons</div> */}
    <select>
      <Size />
    </select>
    <select>
      <Quantity />
    </select>
    <div>
      <AddToCart />
    </div>
    <div>
      <RelatedProducts />
    </div>
    <p className={styles.seven}>Description</p>
    <div className={styles.eight}>
      <button>Facebook</button>
      <button>Twitter</button>
      <button>Pinterest</button>
    </div>
  </div>
);

export default Overview;
