import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/HomePage.css';
import header from '../images/misiek1.png';
import cv from '../images/CV_Kamil_Skorzynski.pdf';

const HomePage = () => {
  return (
    <>
      <div className="wrapper">
        <div className="description__wrapper">
          <p className="welcome">Hi there! My name is</p>
          <p className="name">Kamil Skórzyński</p>
          <p className="description">
            Junior Front-end Developer who is looking for job!
          </p>
          <div className="buttons__wrapper">
            <button className="resume">
              <a href={cv} className="resume__link" download>
                Resume
              </a>{' '}
            </button>{' '}
            <NavLink to="/contact" className="poke__link">
              <button className="poke">Say hi!</button>
            </NavLink>
          </div>
        </div>

        <img src={header} alt="header" className="home__page--img" />
      </div>
    </>
  );
};

export default HomePage;
