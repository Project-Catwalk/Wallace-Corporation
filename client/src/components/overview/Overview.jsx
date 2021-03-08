import React from 'react';
import styles from '../../styleComponents/Overview.module.css';
import ReviewStars from './OverviewRatingsDisplay';
import OverviewStyles from './OverviewStyles';

const Overview = (props) => {
  const { overview, productStyles } = props;
  const { category, description, name, slogan } = overview;

  return (
    <div className={styles.overviewWrapper}>
      <div>
        <OverviewStyles stylesArr={productStyles} name={name} />
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
