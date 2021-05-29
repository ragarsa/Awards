import React from 'react';
import * as styles from './MovieList.scss';
import Button from '../common/button/button'


const MovieList = () => {

    return (
        <>
            <div className={styles.contenedorPeliculas}>
                <div className={styles.pelicula}>
                    <div>
                        <span>
                            <h2>
                                Nombre de la Película
                            </h2>
                        </span>

                        <img src="https://image.tmdb.org/t/p/w500/ux2dU1jQ2ACIMShzB3yP93Udpzc.jpg"></img>
                        <div className="contenedorInfoVotos">
                            <h4>
                                Posicion : 
                            </h4>
                            <h4>
                                Puntaje: 
                            </h4>
                            <Button></Button>
                        </div>
                        
                    </div>
                </div>

                <div className={styles.pelicula}>
                    <div>
                        <span>
                            <h2>
                                Nombre de la Película
                        </h2>
                        </span>

                        <img src="https://image.tmdb.org/t/p/w500/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg"></img>
                        <div className="contenedorInfoVotos">
                            <h4>
                                Posicion
                            </h4>
                            <button> 
                                Votar
                            </button>
                        </div>
                    </div>
                </div>

                <div className={styles.pelicula}>
                    <div>
                        <span>
                            <h2>
                                Nombre de la Película
                        </h2>
                        </span>

                        <img src="https://image.tmdb.org/t/p/w500/qa6HCwP4Z15l3hpsASz3auugEW6.jpg"></img>
                        <div className="contenedorInfoVotos">
                            <h4>
                                Posicion
                            </h4>
                            <button> 
                                Votar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieList;
