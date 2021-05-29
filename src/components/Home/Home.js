import React, { Fragment } from 'react';
import styles from './Home.scss'
import Header from '../common/header/header'
import InputControl from '../common/input/input';
import MovieList from '../MovieList/MovieList';

const Home = () => {
    return (
    <>
        <Header></Header>
        <InputControl></InputControl>
        <MovieList></MovieList>
    </>
    )



}

export default Home;