import React, { useEffect, useState } from 'react';
import Header from '../../components/common/header/header';

import MovieDetailComponent from '../../components/MovieDetailC/MovieDetailComponent'



const MovieDetail = ({ location }) => {
    const [vote, SetVotes] = useState(0);
    const { movie } = location.state


    // const updateMovie = () => {

    // }

    return (
        <>
            <Header></Header>

            <MovieDetailComponent
                movie={movie}
                key={movie.id}
            />



        </>
    )
}

export default MovieDetail;