import React from "react";
import requests from "../Request/requests";
import Row from "../Row/Row";
import Banner from "../Banner/Banner"
import './Dashboard.css'

function Dashboard(){   // Various Movie Categories are Passed to display in the form of Express route  
    
    const baseURL= "https://api.themoviedb.org/3";

    return(
        <div data-testid="dashboard" className= "app">
        
        <Banner fetchUrl={`${baseURL}${requests.fetchNetflixOriginals}`}/>

        <Row title="Starbuff Collection"
         fetchUrl={`${baseURL}${requests.fetchNetflixOriginals}`}
         isLargeRow/>
        <Row title="Trending Now" fetchUrl={`${baseURL}${requests.fetchTrending}`}/>
        
        <Row title="Top rated" fetchUrl={`${baseURL}${requests.fetchTopRated}`}/>
        
        <Row title="Action Movies" fetchUrl={`${baseURL}${requests.fetchActionMovies}`}/>
        
        <Row title="Comedy Movies" fetchUrl={`${baseURL}${requests.fetchComedyMovies}`}/>

        <Row title="Horrer Movies" fetchUrl={`${baseURL}${requests.fetchHorrorMovies}`}/>

        <Row title="Romance Movies" fetchUrl={`${baseURL}${requests.fetchRomanceMovies}`}/>

        </div>
        
    )

}

export default Dashboard;