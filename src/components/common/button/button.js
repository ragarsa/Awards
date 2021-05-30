import React from 'react';
import * as styles from './button.scss'

const Button = ({handleShowDetail, id}) => (
  <button onClick={() => handleShowDetail(id)} className={styles.button}>Vota</button>
);

export default Button;
