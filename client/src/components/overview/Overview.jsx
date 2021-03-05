import React, { useState, useEffect } from 'react';
import styles from '../../styleComponents/Overview.module.css';
import ReviewStars from './OverviewRatingsDisplay';
import OverviewStyles from './OverviewStyles';
import AddToCart from './OverviewCart';
import RelatedProducts from './OverviewRelatedProducts';
import Description from './OverviewProductDescription';
import Slogan from './OverviewProductSlogan';

const Overview = (props) => {
  const { overview, productStyles, relatedProducts } = props;
  const { category, description, name, slogan } = overview;

  return (
    <div className={styles.wrapper}>
      <div>
        <OverviewStyles stylesArr={productStyles} />
      </div>
      <div className={styles.reviews}>
        <ReviewStars />
      </div>
      <div className={styles.productCategory}>
        {category}
      </div>
      <div className={styles.productTitle}>
        {name}
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
