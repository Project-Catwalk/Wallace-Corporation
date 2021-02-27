import React from 'react';
import styles from './Overview.module.css';

const Overview = () => {
  return (
    <div className={styles.wrapper}>
      <img title ='Display Image' className={styles.one}/>
      <p className={styles.two}>Read All Reviews</p>
      <p className={styles.three}>Category</p>
      <p className={styles.four}>Product Name</p>
      <p className={styles.five}>Price</p>
      <form className={styles.six}>Styles</form>
      <p className={styles.seven}>Description</p>
      <button className={styles.eight}>Social Media</button>
    </div>
  );
}

export default Overview;
