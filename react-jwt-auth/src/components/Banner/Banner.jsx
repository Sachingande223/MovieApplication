/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import './Banner.css'

function Banner(){
    const [movie, setMovie] = useState();
     const [image, setImage] = useState();

    useEffect(()=>{var requestOptions = {       // Fetches the movie parameters to display the banner 
        method: 'GET',                          // images in the Home page
        redirect: 'follow'
      };
      
      fetch("https://api.themoviedb.org/3/discover/tv?api_key=38d4dc033760af6b2630824e699ca567&with_networks=213", requestOptions)
        .then(response => response.json())
        .then(result =>{
            console.log(result.results);
            console.log(result.results[Math.floor(Math.random()*result.results.length)]);
            setMovie(result.results[Math.floor(Math.random()*result.results.length)]);
            setImage(`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`);
        })
        .catch(error => console.log('error', error));
    },[image]);
    console.log(movie?.backdrop_path);
    console.log(image);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
      }
    
    return( <header
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(
            "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
          )`,
          backgroundPosition: "center center",
        }}
        >
        <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
        </div>

        
      </header>);
}

export default Banner;