import React from 'react';
import img from '../images/icons/2667878.svg';
import '../styles/ErrorPage.css';

const ErrorPage = () => {
  return (
    // <div className="error">
    //   <img src={img} alt="not__found" className="img__error" />
    // </div>
    <div className="error__page">
      <p id="error">
        E<span>r</span>ror
      </p>
      <p id="code">
        4<span>0</span>
        <span>4</span>
      </p>
    </div>
  );
};

export default ErrorPage;
