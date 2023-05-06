import React, { Fragment } from "react";
import "./Footer.css";
import logo from "../../images/logo.png";

const Footer = () => {
  return (
    <Fragment>
      <footer>
        <div class="container">
          <div className="top-footer">
            <div className="left-top-footer">
              <img src={logo} />
              <p>Easy Agreement</p>
            </div>
            <div className="left-top-footer">
              <h3>Contact Us</h3>
              <p>easyagreement@gmail.com</p>
            </div>
          </div>
          <div className="bottom-footer">
            <p>&copy; 2023 Easy Agreement. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
