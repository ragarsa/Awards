import React from 'react';
import styles from './input.scss'



const InputControl = () => {
    return (
        
            <div className={styles.contenedor} >
                <input type="text" placeholder="Busca tu pelicula favorita"></input>
            </div>
        
    )
};

export default InputControl;