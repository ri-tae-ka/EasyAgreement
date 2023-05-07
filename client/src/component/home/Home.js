import React, { Fragment } from "react";
import Metadata from "../layout/Metadata";
import { Link } from "react-router-dom";
import "./Home.css";
import homepage from "../../images/homepage.png";
import homedemo from "../../images/home-demo.png";

const Home = () => {
  return (
    <Fragment>
      <Metadata title="EasyAgreement" />
      <div className="top-section">
        <div className="left-side">
          <img src={homepage} />
        </div>
        <div className="left-side">
          <div>
            <h1>Easy Agreement</h1>
            <p>
              Our mission is to make legal information more accessible to
              everyone, including individuals with cognitive disabilities. We've
              created a solution that simplifies legal language and offers a
              user-friendly format, making it easier to understand important
              information. Our platform promotes inclusivity and equal
              opportunity, ensuring that everyone can access the legal
              information they need. Join us in breaking down barriers and
              making legal information more accessible for all.
            </p>
          </div>
          <Link to="/summary">Try Now!</Link>
        </div>
      </div>

      <div className="second-section">
        <h3>
          Breaking down barriers: Making legal information
          <br />
          more accessible for everyone
        </h3>
        <p>
          At our web application, we understand the importance of accessibility
          for everyone, including those with cognitive disabilities. That's why
          we have developed a solution that simplifies the language used in
          contracts, making them easier to read and understand. Our platform
          ensures that everyone can access important information, regardless of
          their reading level or cognitive abilities, promoting inclusivity and
          equal opportunity for all.
        </p>
      </div>

      <div className="third-section">
        <div className="left-side">
          <div>
            <h2>Save your time!</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
          </div>
        </div>
        <div className="left-side">
          <img style={{ border: "2px solid #226597" }} src={homedemo} />
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
