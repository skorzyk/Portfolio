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
            Junior Front-end Developer who is looking for a job!
          </p>
          <div className="buttons__wrapper">
            <a href={cv} className="resume" download>
              Resume
            </a>{' '}
            <NavLink to="/contact" className="poke__link poke">
              Say hi!
            </NavLink>
          </div>
        </div>

        <img
          src={header}
          alt="my picture"
          className="homepage__img"
          width="600"
          height="600"
        />
      </div>
    </>
  );
};

export default HomePage;
