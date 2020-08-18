import React from 'react';
import img from '../images/icons/2667878.svg';
import '../styles/ErrorPage.css';

const ErrorPage = () => {
  return (
    <div className="error">
      <img src={img} alt="not__found" className="img__error" />
    </div>
  );
};

export default ErrorPage;
