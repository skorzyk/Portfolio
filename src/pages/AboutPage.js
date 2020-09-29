import React from 'react';
import '../styles/AboutPage.css';
import mockupSmall from '../images/mockup_300x300.jpg';
import mockupMedium from '../images/mockup_800x800.jpg';
import mockupBig from '../images/mockup_1200x1200.jpg';

const AboutPage = () => {
  return (
    <>
      <div className="about swing-in-bottom-fwd">
        <div className="wrapper-about">
          <h1 className="about-title">
            About <span className="title-span">me</span>
          </h1>
          <div className="info-wrapper">
            <h3 className="about-welcome">Hi!</h3>
            <p className="first-info info">
              My name is Kamil Skórzyński. My adventure with programming started
              at the end of 2019. I am developing my knowledge by internet
              courses, and through working on my own projects. Technologies
              which I mainly use is HTML, CSS, JavaScript and React. I am
              currently looking for a job where I can learn new technologies,
              transparency of my code and gain necessary experience which is
              needed in this field. For my part, gladly I will prove that thanks
              to hard work and enthusiasm, I can be valuable team member.
            </p>
            <p className="second-info info">
              I like to spend my free time actively. I am interested in sports,
              especially football. I also love hiking in mountains, mostly for
              beautiful views on the end of trail of course .
            </p>
            <p className="third-info info">
              So, if you want to have a person with a huge enthusiasm to develop
              his skills in your team, and who after work will organize a game
              with buddies, or will go with you on an undiscovered trail, this
              is it. It's me!
            </p>
          </div>
        </div>
        <img
          srcSet={`${mockupSmall} 300w, ${mockupMedium} 800w, ${mockupBig} 1200w`}
          src={mockupBig}
          alt="mockup"
          className="mockup swing-in-bottom-fwd"
          width="600"
          height="600"
        />
      </div>
    </>
  );
};

export default AboutPage;
