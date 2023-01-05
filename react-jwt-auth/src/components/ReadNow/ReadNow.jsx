import React from 'react';
import { useState, useEffect } from "react";
import Card2 from "../card/Card2";
import AuthService from './../../services/auth.service.js'

const ReadNow = () => {
    const [state, setState] = useState([]);

    const deleteMovie = (myObj) =>{    // deletes the movie based on the id passed dynamically
    fetch(`http://localhost:8088/Movie/${myObj.id}`, { method: 'DELETE' });

    }

    useEffect(() => {
  

        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${localStorage.token}`);
        const users = AuthService.getCurrentUser();
        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };
       
        fetch(`http://localhost:8088/getFavorite/${users.username}`, requestOptions)   // favourite movie for a 
          .then(response => response.json())                                            // particular user id fetched
          .then(result => setState(result))
          .catch(error => console.log('error', error));
            
    }, [state])

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    {   
                        // console.log(state)
                         state.map((item) =>  <Card2 deleteData={deleteMovie} key={item.id} obj ={item} />)
                     
                    }
                </div>
            </div>
        </div>
    )
}
export default ReadNow;
