import React, { useEffect, useState } from "react";
const Card = (props) => {

    const AddToFavrHandler = (obj) => {   // movie parameters are passed to the favourite handler
        props.method(obj);
        window.alert("successfully stored")
    }
    const [movie, setMovie] = useState();
     const [image, setImage] = useState();

    useEffect(()=>{
        setImage(`https://image.tmdb.org/t/p/original/${props.moviedata.backdrop_path}`);
        setMovie(props.moviedata.title)
        
    },props);
    console.log(movie?.backdrop_path);
    
    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
      }

    return (
        <header
        className="banners"
        style={{
          backgroundSize: "cover",
          
          backgroundImage: `url(
            "https://image.tmdb.org/t/p/original/${props.moviedata?.backdrop_path}"
          )`,
          backgroundPosition: "center center",height:"448px",
        }}
        >
        <div className="banner__contents">
        <h1 className="banner__title">
          {props.moviedata?.title || props.moviedata?.name || props.moviedata?.original_name}
        </h1>
        <div className="banner__buttons">
            <button className="banner__button">play</button>
            <button className="banner__button" 
            onClick={AddToFavrHandler.bind(this, props.moviedata)}
            >favourite</button>
        </div>
        <h1 className="banner__description">
          {truncate(props.moviedata?.overview, 150)}
        </h1>
        </div>

        <div className="banner--fadeBottom" />
      </header>
    )

}

export default Card;
