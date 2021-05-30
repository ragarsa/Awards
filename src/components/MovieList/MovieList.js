import React, { useEffect, useState } from 'react';
import * as styles from './MovieList.scss'
import getMovies from '../../helpers/getMovies';
import GetList from '../../views/GetMovieList';
import InputControl from '../common/input/input';

const MovieList = () => {
    const [movies, setMovies] = useState([])


    useEffect(() => {

        setRank()

    }, [movies]);

    const setRank = async () => {
        //Simulacion asíncrona
        let data = await getMovies()
        data = data.sort((elemento, reductor) => {
            if (elemento.votes > reductor.votes) {
                return -1;
            }
            if (elemento.votes < reductor.votes) {
                return 1;
            }
            // a must be equal to b
            return 0;
        })
        data = data.map((value,index) => {
                value.position = index+1
                return value
        });
        setMovies(data)
        
    }



    return (
        <>
        <InputControl onChange={handleFilterMovie}/>
        <div className={styles.contenedorPeliculas}>
            {movies.map(movie =>
                <GetList
                    key={movie.id}
                    movie={movie}
                />
            )}
        </div>
        </>
    )
}

export default MovieList;
