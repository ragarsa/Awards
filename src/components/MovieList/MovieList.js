import React, { useEffect, useState } from 'react';
import './MovieList.scss';
import {getMovies} from '../../helpers/getMovies';
import GetList from '../../views/GetMovieList/GetMovieList';
import InputControl from '../common/input/input';


let value = ''

const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const [valueBool, setBool] = useState(true);
    const [movieFilter, setMovieFilter] = useState([]);

    useEffect(() => {

        setRank();

    }, [movies]);

    const setRank = async () => {
        //Simulacion asíncrona
        let data = await getMovies();
        data = data.sort((elemento, reductor) => {
            if (elemento.votes > reductor.votes) {
                return -1;
            }
            if (elemento.votes < reductor.votes) {
                return 1;
            }
            // a must be equal to b
            return 0;
        });
        data = data.map((value, index) => {
            value.position = index + 1
            return value
        });
        setMovies(data);
        
    };


    const handleFilterMovie = (event) => {
        value = event.target.value.toLowerCase();

        let filter = movies.filter(movie => movie.title.toLowerCase().includes(value.toLowerCase()))
        setMovieFilter(filter)
        setBool(false)
        // console.log(filter)
    }

    const handleInputOut = (event) => {
        value = ''
        setBool(true)
       


    }


    return (
        <>
            <InputControl value={value} handleFilterMovie={handleFilterMovie} handleInputOut={handleInputOut} />
            <div className="contenedorPeliculas">
                {(valueBool) ? movies.map(movie =>
                    <GetList
                        key={movie.id}
                        movie={movie}
                    />
                ) : movieFilter.map(movie =>
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
