import React from 'react';

import * as styles from '../components/MovieList/MovieList.scss';

import getMovies from '../helpers/getMovies';


const GetList = ({ movie }) => {
    const { id, title, poster, votes, position } = movie
    return (
        <>
            
            <div className={styles.pelicula}>
                <div>
                    <span>
                        <h2>
                            {title}
                        </h2>
                    </span>

                    <img src={poster}></img>
                    <div className={styles.contenedorInfoVotos}>
                        <h4>
                            Posicion : {position}
                        </h4>
                        <h4>
                            Puntaje: {votes}
                        </h4>
                        {/* <Button></Button> */}
                    </div>

                </div>
            </div>

        </>
    )

};

export default GetList;
