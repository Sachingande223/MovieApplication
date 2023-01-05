import React from "react";
import './Footer.css'

const Footer = (props) => {     // Parameters to display in the footer is fetched from app.js
    return(
        <div data-testid="footer" className="footer bg-dark">
            {props.footertext}
        </div>
    );
}

export default Footer;