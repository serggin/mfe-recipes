import React from 'react';
import styles from './Text.module.css';

export function Text({children}: {children: React.ReactNode}) {
  return (
    <p className={styles.p}>{children}</p>
  );
}

export default Text;
