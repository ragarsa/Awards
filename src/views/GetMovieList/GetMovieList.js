import React, {useCallback} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Button from '../../components/common/button/button';
import MovieDetail from '../MovieDetail/MovieDetail'
import * as styles from '../../components/MovieList/MovieList.scss';



const GetList = ({ movie,props}) => {

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
                        
                        <Router>
                            <Route path={`/${id}`}> 
                                <MovieDetail>

                                </MovieDetail>
                            </Route>
                        <Link to={{
                            pathname: `/${id}`,
                            state:movie
                            }}> Votar </Link>
                        {/* <Button id={id} handleShowDetail={handleShowDetail}></Button> */}
                        </Router>
                    </div>

                </div>
            </div>

        </>
    )

};

export default GetList;
