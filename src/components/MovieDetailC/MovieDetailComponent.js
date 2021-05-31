import React from 'react';
import './MovieDetail.scss';
const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

const MovieDetailComponent = ({ movie }) => {

    const { id,
        title,
        overview,
        release_date,
        poster,
        votes,
        position,
        genres
    } = movie

    let date = new Date(release_date*1000)
    date = `${months[date.getMonth()]}-${date.getFullYear()}`
    return (
        <>
            <div className="infoContainer">
                <h1>{title}</h1>
                <h3>Position: <span>{position}</span></h3>
                <div className="bodyContainer">
                    <div>
                        <img className="poster" src={poster} alt={title}></img>
                        <img className="play" src="https://www.crossfitilluminati.com/wp-content/uploads/2015/11/play-icon.png" alt="Watch Trailer"></img>
                        
                    </div>
                    <div className="textContainer">
                        <h3>
                            Sinopsis
                        </h3>
                        <p> {overview} </p>
                        <p> <span>Release:</span> {date} </p>
                        <p><span>Votes: {votes} </span></p>
                    </div>
                </div>

            </div>

        </>
    )
};

export default MovieDetailComponent;
