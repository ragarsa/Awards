import React, { useState, useEffect } from 'react';
import Header from '../common/header/header'
import InputControl from '../common/input/input';
import MovieList from '../MovieList/MovieList';


const Home = () => {
    return (
    <>
        <Header></Header>
        <MovieList></MovieList>
    </>
    )



}

export default Home;