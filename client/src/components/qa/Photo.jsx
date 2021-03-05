import React, { useState } from 'react';
import styles from '../../styleComponents/App.module.css';

const Photo = (props) => {
  const { photo } = props;
  return (
    <img className={styles.imgThumbnail} src={photo} />
  );
};

export default Photo;
