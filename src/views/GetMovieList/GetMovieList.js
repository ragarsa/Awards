import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../components/common/button/button';
import '../../components/MovieList/MovieList.scss';



const GetList = (props) => {
    const history = useHistory();


    const { movie } = props;

    const {id, title, position, votes, poster} = movie;
    
    // console.log(props.history)
    const handleShowDetail = (id) => {
        history.push({
            pathname: `/home/${id}`,
            state: {movie}})
        }

    return (
        <>

            <div className="pelicula">
                <div className="pelicula-inner">
                    <span>
                        <h2>
                            {title}
                        </h2>
                    </span>

                    <img src={poster} alt={title} Loading="lazy"></img>
                    <div className="contenedorInfoVotos">
                        <h4>
                            Posicion : {position}
                        </h4>
                        <h4>
                            Puntaje: {votes}
                        </h4>

                        <Button id={id} handleShowDetail={handleShowDetail}>
                            
                        </Button>

                    </div>

                </div>
            </div>

        </>
    )

};

export default GetList;
