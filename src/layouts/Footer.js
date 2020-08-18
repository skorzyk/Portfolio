import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <>
      <div className="footer__wrapper">
        <div className="icons">
          <a
            href="https://www.instagram.com/misiek.zdzisiek/"
            className="footer__link"
          >
            <i class="fab fa-instagram icons__link"></i>
          </a>
          <a href="https://www.facebook.com/majkbush" className="footer__link">
            <i class="fab fa-facebook icons__link"></i>
          </a>
          <a href="https://github.com/skorzyk" className="footer__link">
            <i class="fab fa-github icons__link"></i>
          </a>
        </div>
        <p className="footer__desc">Copyrigth @ Kamil Skórzyński 2020</p>
      </div>
    </>
  );
};

export default Footer;
