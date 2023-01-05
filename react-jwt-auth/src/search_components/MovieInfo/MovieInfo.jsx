import React from 'react';
import { IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from '../../config';
import MovieThumb from '../MovieThumb/MovieThumb';

import { Link } from "react-router-dom";
import './MovieInfo.css';
import Logo3 from "../../images/no-image.jpg";

import AuthService from './../../services/auth.service.js'

function MovieInfo(props)
{
 const showProps=()=>{
    console.log(props.movie)
    const users = AuthService.getCurrentUser();
    console.log(users.username);
    fetch(`http://localhost:8088/Movie`, {        // sends the movie details if added as favourite
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
            uname:users.username,
            id:props.movie.id,
            poster_path:props.movie.poster_path,
            name:props.movie.title,
            release_date:props.movie.release_date,
            desc:props.movie.overview
        })
    }).then(res => console.log(res));
    window.alert(`${props.movie.title} request send `)
  }
	return (
    <div
      className="rmdb-movieinfo"
      style={{
        background: props.movie.backdrop_path
          ? `linear-gradient(rgba(0, 0, 0, 0) 39%, rgba(0, 0, 0, 0) 41%, rgba(0, 0, 0, 0.65) 100%), url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${props.movie.backdrop_path}')`
          : "#000"
      }}
    >
      <div className="rmdb-movieinfo-content">
        <div className="rmdb-movieinfo-thumb">
          <MovieThumb
            image={
              props.movie.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${props.movie.poster_path}`
                : `${Logo3}`
            }
            clickable={false}
          />
        </div>
        <div className="rmdb-movieinfo-text">
          <h1>{props.movie.title}</h1><div className="banner__buttons">
          <Link to={"/search"} >
            <button className="banner__button">Search</button></Link>
            <button className="banner__button" onClick={showProps}>favorite</button>
        </div>

          <h3>PLOT</h3>
          <p>{props.movie.overview}</p>
          <h3>IMDB RATING</h3>
          <div className="rmdb-rating">
            <meter
              min="0"
              max="100"
              optimum="100"
              low="40"
              high="70"
              value={props.movie.vote_average * 10}
            ></meter>
            <p className="rmdb-score">{props.movie.vote_average}</p>
          </div>
          {props.directors.length > 1 ? <h3>DIRECTORS</h3> : <h3>DIRECTOR</h3>}
          {props.directors.map((element, i) => {
            return (
              <p key={i} className="rmdb-director">
                {element.name}
              </p>
            );
          })}
          
        </div>
      </div>
    </div>
  );
}

export default MovieInfo;
