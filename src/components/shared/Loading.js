// @flow
import React from 'react';
import posed from 'react-pose';

import styles from './Loading.module.css';

posed.rect({});

function Loading() {
  return (
    <div className={styles.box}>
      <svg viewBox="0 0 10 10">
        <rect className={styles.rect1} x="35%" y="35%" width="50%" height="50%" fill="#49BFFF" />
        <rect className={styles.rect2} x="25%" y="25%" width="50%" height="50%" fill="#B2AE17" />
        <rect className={styles.rect3} x="15%" y="15%" width="50%" height="50%" fill="#FFFA4E" />
      </svg>

    </div>
  );
}

export default Loading;
