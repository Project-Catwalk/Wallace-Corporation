import React from 'react';
import styles from './Overview.module.css';

const Overview = () => (
  <div className={styles.wrapper}>
    <img title ='Display Image' className={styles.one}/>
    <p className={styles.two}>Read All Reviews</p>
    <p className={styles.three}>Category</p>
    <p className={styles.four}>Product Name</p>
    <p className={styles.five}>Price</p>
    <div className={styles.six}>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>7</button>
    </div>
    <p className={styles.seven}>Description</p>
    <button className={styles.eight}>Social Media</button>
  </div>
);

export default Overview;
