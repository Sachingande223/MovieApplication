import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation(props)
{
	return (                  // renders navigation on clicking the particular movie dynamically
    <div className="rmdb-navigation">
      <div className="rmdb-navigation-content">
        <Link to="/search">
          <p>Search</p>
        </Link>
        <p>/</p>
        <p>{props.movie}</p>
      </div>
    </div>
  );
}

export default Navigation;
