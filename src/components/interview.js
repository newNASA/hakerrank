import React, { useState, useEffect } from "react";
import AnimatedLogos from "../json/animated-logos.json";
import AboutCards from "../json/about-cards.json";
import Logos from "../json/logos.json";
import "../scss/style.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Interview() {

  useEffect(() => {
    AOS.init();
  }, []);

  const [position, setPosition] = useState(0);
  const [activeDot, setActiveDot] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const newActiveDot = (activeDot + 1) % 6;
      setActiveDot(newActiveDot);

      const newPosition = -(newActiveDot * 358);
      setPosition(newPosition);
    }, 5000);

    return () => clearInterval(interval);
  }, [activeDot]);

  return (
    <div className="interview">
      <div className="top">
        <h1>
          Interview like it’s <span>2024</span>
        </h1>
        <p>
          Ditch out of reach and out of touch interview questions about golf
          balls and 747s — and turn off your clunky screen share for good. Code,
          create, and collaborate with an IDE built to showcase real-world
          skills in a real-world environment.
        </p>
        <p>
          <a href="#">Learn more</a>
        </p>
      </div>
      <div className="bottom">
        <div className="logos">
          {AnimatedLogos.map((logo, index) => (
            <img data-aos="fade-up"
            data-aos-anchor-placement="center-center"
              key={index}
              src={logo.src}
              width={logo.width}
              height={logo.height}
            />
          ))}
        </div>

        <div className="img">
          <img
            src="https://www.hackerrank.com/wp-content/uploads/2024/01/interview-2.png"
            alt=""
          />
        </div>
      </div>

      <div className="about">
        <div className="left">
          <h3>Every company is a tech company.</h3>
          <span>We’re here to help ‘em all.</span>
          <p>
            More than 3,000 tech teams, representing all industries and from
            countries around the world, trust HackerRank to connect with
            developers and add cutting-edge skills to their teams.
          </p>
          <p>
            That includes 25% of the Fortune 100 — and that moonshot startup
            that just came out of stealth.
          </p>
        </div>
        <div className="right">
          <div
            className="fixer"
            style={{ transform: `translateX(${position}px)` }}
          >
            {AboutCards.map((card, index) => (
              <div key={index} className="card">
                <img src={card.src} width={90} alt={`card-${index}`} />
                <p>{card.text}</p>
              </div>
            ))}
          </div>
          <div className="slider-dots">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className={`dot ${index === activeDot ? "active" : ""}`}
                onClick={() => {
                  setActiveDot(index);
                  setPosition(-(index * 358));
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
      <div className="client-logos">
        {Logos.map((post) => {
          return <img src={post.src}></img>;
        })}
      </div>
    </div>
  );
}

export default Interview;