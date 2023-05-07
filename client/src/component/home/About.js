import React, { Fragment } from "react";
import Metadata from "../layout/Metadata";
import "./About.css";

const About = () => {
  return (
    <Fragment>
      <Metadata title={`About Us`} />
      <div className="aboutPage">
        <div className="aboutContainer">
          <h1 className="aboutHeading">About Us</h1>
          <p>
            <span>Easy Agreement,</span> where our goal is to make legal
            contracts more accessible. Our innovative MERN stack web based
            application allows users to <b>upload legal contracts</b> in PDF
            format and <b>generate a summarized version</b>.
            <br />
            <br />
            We believe that understanding legal documents should be easy for
            everyone, which is why we have included <span>
              accessibility
            </span>{" "}
            features such as font size customization, read-aloud option, and
            translation.
            <br />
            <br />
            Our mission is to simplify the legal process and make legal
            contracts easier to understand for everyone. With our commitment to
            accessibility, we aim to make legal contracts{" "}
            <b>easy to understand and accessible to everyone.</b>
          </p>
          <div>
            <span>Made with 💙</span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
