import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer__wrapper">
        <div className="icons">
          <a
            target={`_blank`}
            href="https://www.instagram.com/misiek.zdzisiek/"
            className="footer__link"
          >
            <div className="fab fa-instagram icons__link"></div>
          </a>
          <a
            target={`_blank`}
            href="https://www.facebook.com/majkbush"
            className="footer__link"
          >
            <div className="fab fa-facebook icons__link"></div>
          </a>
          <a
            target={`_blank`}
            href="https://github.com/skorzyk"
            className="footer__link"
          >
            <div className="fab fa-github icons__link"></div>
          </a>
        </div>
        <p className="footer__desc">Copyright @ Kamil Skórzyński 2020</p>
      </div>
    </>
  );
};

export default Footer;
