import React from "react";
import "./FourColGrid.css";
import PropTypes from "prop-types";

const FourColGrid = (props) => {                // sets the rendered movie in the form of grid
  const renderElements = () => {
    const gridElements = props.children.map((element, i) => {
      return (
        <div key={i} className="rmdb-grid-element" id="actor">
          {element}
        </div>
      );
    });
    return gridElements;
  };
  return (
    <div className="rmdb-grid">
      {props.header && !props.loading ? <h1>{props.header}</h1> : null}
      <div className="rmdb-grid-content">{renderElements()}</div>
    </div>
  );
};
  
FourColGrid.propTypes = {                       // Checkes for the prototype of the rendered response
  header: PropTypes.string,
  loading: PropTypes.bool
};

export default FourColGrid;
