import React, { useEffect, useState } from 'react';
import styles from '../styleComponents/App.module.css';

const ExpandedPhotos = ({ photo }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    photo
      ? (
        <span className={expanded ? styles.overlayPhoto : ''}>
          {(!expanded)
            ? (
              <img
                role="presentation"
                src={photo.url}
                alt="review"
                className={styles.imgThumbnail}
                onClick={() => setExpanded(!expanded)}
                onKeyDown={() => setExpanded(!expanded)}
              />
            )
            : (
              <img
                role="presentation"
                src={photo.url}
                alt="review"
                className={styles.photo}
                onClick={() => setExpanded(!expanded)}
                onKeyDown={() => setExpanded(!expanded)}
              />
            )}
        </span>
      )
      : null
  );
};

export default ExpandedPhotos;
