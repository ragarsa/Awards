import React from 'react';
import './button.scss';

const Button = ({handleShowDetail, id}) => (
  <button onClick={() => handleShowDetail(id)} className="button">Vota</button>
);

export default Button;
