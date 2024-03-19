import React, { useState, useEffect } from "react";
import "../scss/style.css";
import leftarrow from "../imgs/arrowleft.svg";
import righttarrow from "../imgs/arrowright.svg";

function Navbar() {
    const [isProductsVisible, setIsProductsVisible] = useState(false);
    const [isSolutionVisible, setIsSolutionVisible] = useState(false);
    const [activeDivIndex, setActiveDivIndex] = useState(0);
    const [isTop, setIsTop] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setActiveDivIndex((prevIndex) => (prevIndex + 1) % 3); 
        }, 3000);
        return () => clearTimeout(timer);
    }, [activeDivIndex]);

    useEffect(() => {
        function handleScroll() {
            const navbar = document.querySelector('.navbar');
            const topDiv = document.querySelector('.top');
            const centerDiv = document.querySelector('.center');
            
            const topDivHeight = topDiv.clientHeight;
            const centerDivHeight = centerDiv.clientHeight;
            const totalHeight = topDivHeight + centerDivHeight;
            const scrollThreshold = totalHeight;
            
            if (window.scrollY > scrollThreshold) {
                topDiv.style.display = 'none';
                centerDiv.style.display = 'none';
                setIsTop(true);
            } else {
                topDiv.style.display = 'flex';
                centerDiv.style.display = 'flex'; 
                setIsTop(false);
            }
        }
        

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const goToNextDiv = () => {
        setActiveDivIndex((prevIndex) => (prevIndex + 1) % 3);
    };

    const goToPrevDiv = () => {
        setActiveDivIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
    };

    function handleMouseEnterProducts() {
        setIsProductsVisible(true);
    }

    function handleMouseLeaveProducts() {
        setIsProductsVisible(false);
    }

    function handleMouseEnterSolution() {
        setIsSolutionVisible(true);
    }

    function handleMouseLeaveSolution() {
        setIsSolutionVisible(false);
    }

    return (
        <div className="navbar">
            <div className="top">
                <img src={leftarrow} alt="Left Arrow" onClick={goToPrevDiv} />
                <div className="info">
                    <div style={{ display: activeDivIndex === 0 ? 'flex' : 'none' }}>
                        <p>HackerRank Launches Two New Products: SkillUp and Engage</p>
                        <a href="#">Read now</a>
                    </div>
                    <div style={{ display: activeDivIndex === 1 ? 'flex' : 'none' }}>
                        <p>HackerRank AI Day will unveil new innovations in AI and feature industry thought leaders.</p>
                        <a href="#">Read now</a>
                    </div>
                    <div style={{ display: activeDivIndex === 2 ? 'flex' : 'none' }}>
                        <p>The 2024 Developer Skills Report is here! </p>
                        <a href="#">Read now</a>
                    </div>
                </div>
                <img src={righttarrow} alt="Right Arrow" onClick={goToNextDiv} />
            </div>
            <div className="center">
                <a href="#">Contact us</a>
                <hr />
                <a href="#">Log in</a>
            </div>
            <div className={`bottom ${isTop ? 'top-scroll' : ''}`}>
                <div className="logo">
                    <img src="https://www.hackerrank.com/wp-content/uploads/2018/08/hackerrank_logo.png"
                        alt="HackerRank Logo" />
                </div>
                <div className="links">
                    <ul>
                        <li>
                            Products
                            <div className={`products dropdown ${isProductsVisible ? "visible" : ""}`}
                                onMouseEnter={handleMouseEnterProducts} onMouseLeave={handleMouseLeaveProducts}>
                                <div className="left-link">
                                    <span>Products</span>
                                    <div className="link">
                                        <a href="#">Screen</a>
                                        <h5>Save time and accelerate your hiring.</h5>
                                    </div>
                                    <div className="link">
                                        <a href="#">Interview</a>
                                        <h5>Conduct stellar technical interviews.</h5>
                                    </div>
                                    <div className="link">
                                        <a href="#">Engage</a>
                                        <h5>Promote your tech brand</h5>
                                    </div>
                                    <div className="link">
                                        <a href="#">SkillUp</a>
                                        <h5>Mobilize your tech talent.</h5>
                                    </div>
                                </div>
                                <div className="right-link">
                                    <span>Features</span>
                                    <div className="link">
                                        <a href="#">Screen</a>
                                        <h5>Save time and accelerate your hiring.</h5>
                                    </div>
                                    <div className="link">
                                        <a href="#">Interview</a>
                                        <h5>Conduct stellar technical interviews.</h5>
                                    </div>
                                    <div className="link">
                                        <a href="#">Engage</a>
                                        <h5>Promote your tech brand</h5>
                                    </div>
                                    <div className="link">
                                        <a href="#">SkillUp</a>
                                        <h5>Mobilize your tech talent.</h5>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            Solution
                            <div className={`solution dropdown ${isSolutionVisible ? "visible" : ""}`}
                                onMouseEnter={handleMouseEnterSolution} onMouseLeave={handleMouseLeaveSolution}>
                                <div className="left-link">
                                    <span>What We Do</span>
                                    <div className="link">
                                        <a href="#">Set Up Your Skills Strategy</a>
                                    </div>
                                    <div className="link">
                                        <a href="#">Showcase Your Talent Brand</a>
                                    </div>
                                    <div className="link">
                                        <a href="#">Optimize Your Hiring Process</a>
                                    </div>
                                    <div className="link">
                                        <a href="#">Mobilize Your Internal Talent</a>
                                    </div>
                                    <div className="link">
                                        <a href="#">Embrace AIt</a>
                                    </div>
                                </div>
                                <div className="right-link">
                                    <span>Use Cases</span>
                                    <div className="link">
                                        <a href="#">Remote Hiring</a>
                                    </div>
                                    <div className="link">
                                        <a href="#">University Hiring</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>Resources</li>
                        <li>Pricing</li>
                    </ul>
                </div>
                <div className="right">
                    <a href="#">For developers</a>
                    <a href="#">Request demo</a>
                    <a href="#">Sign up</a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
