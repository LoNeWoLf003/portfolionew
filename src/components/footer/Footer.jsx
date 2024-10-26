import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Sayak SenGupta</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About Me
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <a
            href="https://instagram.com/wwwdotthatcoderguydotcom?igshid=MzMyNGUyNmU2YQ=="
            className="footer__social-icon"
            target="_blank" rel="noopener noreferrer"
          >
            <i class="bx bxl-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/sayak-sengupta-a613931ba/"
            className="footer__social-icon"
            target="_blank" rel="noopener noreferrer"
          >
            <i class="bx bxl-linkedin"></i>
          </a>
          <a
            href="https://www.cloudskillsboost.google/public_profiles/dd03d123-b7ad-4c8d-bccb-7a652dd5ce4e"
            className="footer__social-icon"
            target="_blank" rel="noopener noreferrer"
          >
            <i class="bx bx-cloud"></i>
          </a>
        </div>
        <span className="footer__copy">&#169; LoNeWoLf003. All Rights Reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
