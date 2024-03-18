import React from 'react';
import "../scss/style.css";
import Logos from '../json/logos.json';

function Header() {
    return (
        <header>
            <h1>Skills speak louder than words</h1>
            <p>We help companies develop the strongest tech teams around. We help candidates sharpen their tech skills and pursue job opportunities.</p>
            <p>
                <a href='#' className='sign'>Sign up</a>
                <a href='#' className='demo'>Request demo</a>
            </p>
            <p>Over 40% of developers worldwide and 3,000 companies use HackerRank</p>
            <div className='client-logos'>
                {Logos.map((post) => {
                    return(
                        <img src={post.src}></img>
                    )
                })}
            </div>
        </header>
    );
}

export default Header;