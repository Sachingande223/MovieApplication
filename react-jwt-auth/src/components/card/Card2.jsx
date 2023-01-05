
import React from "react";
import './Card2.css'

const Card2 = (props) => {

    const DeleteMovieHandler = (item) => {    // Movie is delted from the favourite list
        props.deleteData(item);
        // console.log(item)
    }
    return (
        <div className="row__posters">
        <div  className="card mt-2"  >
  
            <img className="card-img-top" src={"https://image.tmdb.org/t/p/original/"+props.obj.poster_path} alt="Card image"/>
            <div className="card-body">
                
               
                <button onClick={DeleteMovieHandler.bind(this, props.obj)} className="btn btn-sm btn-danger float-right">Delete</button>
            </div>
        </div>
        </div>
    )

}

export default Card2;