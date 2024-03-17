import React from 'react';
import "../scss/style.css";

import leftarrow from '../imgs/arrowleft.svg';
import righttarrow from '../imgs/arrowright.svg';

function Navbar() {
    return ( 
        <div className="navbar">
            <div className="top">
                <img src={leftarrow}></img>
                <ingo
                <img src={righttarrow}></img>
            </div>
            <div className="center"></div>
            <div className="bottom"></div>
        </div>
    );
}

export default Navbar;