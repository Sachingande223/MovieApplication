import React, { useEffect, useState } from 'react';
import  './Row.css'
import AuthService from './../../services/auth.service.js'
import Card from '../card/Card';

function Row(props){
    const [movies,setMovies]=useState([]);
    const [noCard,setnoCard]=useState(true);
    const [solo, setSolo]=useState(null);
    const baseUrl= "https://image.tmdb.org/t/p/original/";

    
    const AddObject = (obj) => {
        const users = AuthService.getCurrentUser();
        console.log(users.username);
        fetch(`http://localhost:8088/Movie`, {          // Movies from the Express routes, when added to 
            headers: {                                  // favourite are passed to the database
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                uname:users.username,
                id:obj.id,
                poster_path:obj.poster_path,
                name:obj.title,
                release_date:obj.release_date,
                desc:obj.overview
            })
        }).then(res => console.log(res));
        
    }

    useEffect(()=>{var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch(props.fetchUrl, requestOptions)
        .then(response => response.json())
        .then(result =>{ setMovies(result.results)
        })
        .catch(error => console.log('error', error));
    },[props.fetchUrl,noCard]);

    

    return(  
    
   
        <div className="row">
            <h2>{props.title}</h2>
            
            <div className="row__posters">
                {
                    movies.map((movie) => {
                        return (    
                        <img 
                        key={movie.id} 
                        className={ `row__poster ${props.isLargeRow && "row__posterLarge"}` }
                        src={`${baseUrl}${props.isLargeRow?movie.poster_path : movie.backdrop_path}`} 
                        
                        onClick={()=>{setnoCard(!noCard);setSolo(movie);console.log(solo,noCard);}}
                            // AddObject.bind(this,movie)
                        alt={movie.title}/> 
                        )   
                    })
                  
                }
            </div>
           { (noCard)  ?<div></div>:
        <div>  <Card method={AddObject} moviedata={solo}  /> </div>}
        </div>
       
    );

}

export default Row;