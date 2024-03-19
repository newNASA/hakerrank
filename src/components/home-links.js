import React from 'react';

function Home_links() {
    return (
        <div className='home-links'>
            <div className='left'>
                <h3>Practice coding challenges &
                    <span> prep for interviews</span>
                </h3>
                <p>Start practicing your skills now and land the job of your dreams.</p>
                <a href='#'>Join the community</a>
            </div>
            <div className='right'>
                <h3>Get started <span> hiring with HackerRank</span></h3>
                <p>More than 3,000 tech teams, representing all industries and from countries around the world, trust HackerRank</p>
                <a href='#'>Request demo</a>
            </div>
        </div>
    );
}

export default Home_links;