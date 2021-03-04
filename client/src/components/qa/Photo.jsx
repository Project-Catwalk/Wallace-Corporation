import React, { useState } from 'react';
import styles from '../../styleComponents/App.module.css';

const Photo = (props) => {
  const { photo } = props;
  // console.log(photo);
  return (
    <img className={styles.imgThumbnail} src={photo} />
  );
};

export default Photo;
