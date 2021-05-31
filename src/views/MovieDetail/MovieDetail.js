import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';

import MovieDetailComponent from '../../components/MovieDetailC/MovieDetailComponent'
import Footer from '../../components/Footer/Footer'



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

        <Footer></Footer>

        </>
    )
}

export default MovieDetail;