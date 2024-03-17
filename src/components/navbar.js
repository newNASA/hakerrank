import React from 'react';
import "../scss/style.css";

import leftarrow from '../imgs/arrowleft.svg';
import righttarrow from '../imgs/arrowright.svg';

function Navbar() {
    return ( 
        <div className="navbar">
            <div className="top">
                <img src={leftarrow}></img>
                <div className='info'>
                    <p>HackerRank Launches Two New Products: SkillUp and Engage</p>
                    <a href='#'>Read now</a>
                </div>
                <img src={righttarrow}></img>
            </div>
            <div className="center">
                <a href='#'>Contact us</a>
                <hr />
                <a href='#'>Log in</a>
            </div>
            <div className="bottom">
                <div className='logo'>
                    <img src='https://www.hackerrank.com/wp-content/uploads/2018/08/hackerrank_logo.png'></img>
                </div>
                <div className='links'>
                    <ul>
                        <li>Products</li>
                        <li>Solution</li>
                        <li>Resources</li>
                        <li>Pricing</li>
                    </ul>
                </div>
                <div className='right'>
                    <a href='#'>For developers</a>
                    <a href='#'>Request demo</a>
                    <a href='#'>Sign up</a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;