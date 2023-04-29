import React, { Fragment } from "react";
import Metadata from "../layout/Metadata";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Fragment>
      <Metadata title="EasyAgreement" />
      <div>Home</div>
      <Link to="/summary">Try Now!</Link>
    </Fragment>
  );
};

export default Home;
