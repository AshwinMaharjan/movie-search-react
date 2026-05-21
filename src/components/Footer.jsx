import React from "react";
import "../css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span className="footer-brand">▶ Movie App</span>
        <span className="footer-divider" />
        <span className="footer-credit">
          Powered by{" "}
          <a
            href="https://www.themoviedb.org"
            target="_blank"
            rel="noreferrer"
          >
            TMDB
          </a>
        </span>
        <span className="footer-divider" />
        <span className="footer-copy">
          © {new Date().getFullYear()} All rights reserved - AshwinMaharjan
        </span>
      </div>
    </footer>
  );
};

export default Footer;