import React from 'react';
import "../scss/style.css";

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
                <img src='https://www.hackerrank.com/wp-content/uploads/2022/10/peloton_black.png'></img>
                <img src='https://www.hackerrank.com/wp-content/uploads/2022/10/atlassian_black.png'></img>
                <img src='https://www.hackerrank.com/wp-content/uploads/2022/10/bloomberg_black.png'></img>
                <img src='https://www.hackerrank.com/wp-content/uploads/2022/10/vmware_black.png'></img>
                <img src='https://www.hackerrank.com/wp-content/uploads/2022/10/stripe_black.png'></img>
                <img src='https://www.hackerrank.com/wp-content/uploads/2022/10/adobe_black.png'></img>
                <img src='https://www.hackerrank.com/wp-content/uploads/2022/10/linkedin_black.png'></img>
            </div>
        </header>
    );
}

export default Header;