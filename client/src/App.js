import "./App.css";
import { Fragment } from "react";
import Header from "./component/layout/Header";
import Footer from "./component/layout/Footer";
import Home from "./component/home/Home";
import Signup from "./component/user/Signup";
import Login from "./component/user/Login";
import { Route, Routes } from "react-router-dom";
import {BrowserRouter as Router} from "react-router-dom"

function App() {
  return (
    <Fragment>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </Fragment>
  );
}

export default App;
