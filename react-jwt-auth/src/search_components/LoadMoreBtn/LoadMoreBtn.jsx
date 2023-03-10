import React from 'react';
import './LoadMoreBtn.css';

const LoadMoreBtn = props => {			// sets the load more button properties
	return (
		<div className="rmdb-loadmorebtn" onClick={props.onClick}>
			<p>{props.text}</p>
		</div>
	);
};

export default LoadMoreBtn;
