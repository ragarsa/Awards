import React from 'react';
import styles from './button'

const Button = ({label}) => (
  <button className={styles.button}>{label}</button>
);

export default Button;
