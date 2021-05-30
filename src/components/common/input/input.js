import React from 'react';
import styles from './input.scss'



const InputControl = ({value, handleFilterMovie, handleInputOut}) => {
    return (
        
            <div className={styles.contenedor} >
                <input value={value} onChange={handleFilterMovie} onBlur={handleInputOut} type="text" placeholder="Busca tu pelicula favorita"></input>
            </div>
        
    )
};

export default InputControl;