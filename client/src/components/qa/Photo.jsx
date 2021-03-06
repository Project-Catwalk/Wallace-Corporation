import React, { useState } from 'react';
import styles from '../../styleComponents/App.module.css';
import qastyles from '../../styleComponents/QA.modules.css';

const Photo = (props) => {
  const { photo } = props;
  return (
    <img className={`${styles.imgThumbnail} ${qastyles.photo}`} src={photo} />
  );
};

export default Photo;
