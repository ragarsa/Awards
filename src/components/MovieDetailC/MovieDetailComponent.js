import React, {useState} from 'react';
import './MovieDetail.scss';
const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

const MovieDetailComponent = ({ movie }) => {

    const {
        title,
        overview,
        release_date,
        poster,
        votes,
        position
    } = movie
    const [vote, setVote] = useState(votes)
    let date = new Date(release_date*1000)
    date = `${months[date.getMonth()]}-${date.getFullYear()}`
    
    const handlePlayVideo = () => {
        console.log('yes')
    }

    const handleSumVote = () => {
        setVote(vote+1)
    }
    const handleMinusVote = () => {
        setVote(vote-1)
    }
    
    return (
        <>
            <div className="infoContainer">
                <h1>{title}</h1>
                <h3>Position: <span>{position}</span></h3>
                <div className="bodyContainer">
                    <div>
                        <img onClick={() => handlePlayVideo()} className="poster" src={poster} alt={title}></img>
                
                        
                    </div>
                    <div className="textContainer">
                        <h3>
                            Sinopsis
                        </h3>
                        <p> {overview} </p>
                        <p> <span>Release:</span> {date} </p>
                        <p><span>Votes: {vote} </span></p>
                        <div className="buttonContainer">
                            <button onClick={() => {handleSumVote()}}className="button-gold">Must win</button>
                            <button onClick={() => {handleMinusVote()}} className="button-red">Not at all</button>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
};

export default MovieDetailComponent;
