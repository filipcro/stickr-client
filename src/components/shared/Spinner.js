// @flow
import React from 'react';

import styles from './Spinners.module.css';

function Spinner() {
  return (
    <div className={styles.box}>
      <span className={styles.spinner} />
    </div>
  );
}

export default Spinner;
