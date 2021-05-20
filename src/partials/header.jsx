import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <>
        <header className="tm-site-header">
          <div className="tm-header-menu">
            <div className="container tm-header-menu-container">
              <div className="tm-site-branding">
                {/* For Image Logo */}
                <a href="index.html" className="tm-logo-link">
                  <img
                    src="assets/img/logosntsmall.png"
                    alt=""
                    className="tm-logo"
                  />
                  <img
                    src="assets/img/logosnt.png"
                    alt=""
                    className="tm-mobile-logo"
                  />
                </a>
                {/* For Site Title */}
                {/* <span class="tm-site-title">
                  <a href="index.html">Ocher</a>
              </span> */}
              </div>
              <nav className="tm-primary-nav tm-section-active">
                <ul className="tm-primary-nav-list">
                  <li className="menu-item">
                    <a href="#about" className="nav-link">
                      About
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="#howitworks" className="nav-link">
                      How It Works
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="#tokensale" className="nav-link">
                      Token Sale
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="#bounty" className="nav-link">
                      Bounty
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="#roadmap" className="nav-link">
                      Roadmap
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="#team" className="nav-link">
                      Team
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="#faq" className="nav-link">
                      Faq
                    </a>
                  </li>
                </ul>

                {/* .tm-language */}
                <div className="tm-menu-meta">
                  <button
                    className="tm-btn tm-style1 tm-with-border"
                    data-toggle="modal"
                    data-target="#tm-login"
                    
                  >
                    LOGIN
                  </button>
                  <button
                    className="tm-btn tm-style1 tm-with-border"
                    data-toggle="modal"
                    data-target="#tm-signup"
                  >
                    SIGNUP
                  </button>
                </div>
              </nav>
            </div>
            {/* .tm-header-menu-container */}
          </div>
          {/* .tm-header-menu */}
        </header>
        <div className="tm-section-active tm-fix-bar">
          <ul
            className="wow fadeInRight"
            data-wow-duration="0.8s"
            data-wow-delay="0.5s"
          >
            <li>
              <Link to="#home" className="nav-link" />
            </li>
            <li>
              <Link to="#about" className="nav-link" />
            </li>
            <li>
              <Link to="#video" className="nav-link" />
            </li>
            <li>
              <Link to="#howitworks" className="nav-link" />
            </li>
            <li>
              <Link to="#tokensale" className="nav-link" />
            </li>
            <li>
              <Link to="#bounty" className="nav-link" />
            </li>
            <li>
              <Link to="#roadmap" className="nav-link" />
            </li>
            <li>
              <Link to="#team" className="nav-link" />
            </li>
            <li>
              <Link to="#featured-company" className="nav-link" />
            </li>
            <li>
              <Link to="#faq" className="nav-link" />
            </li>
            <li>
              <Link to="#tm-subscribe" className="nav-link" />
            </li>
            <li>
              <Link to="#footer" className="nav-link" />
            </li>
          </ul>
        </div>
      </>
    );
  }
}
export default Header;
