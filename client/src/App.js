import "./App.css";
import { Fragment, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { loadUser } from "./actions/userActions";
import store from "./store";
import Header from "./component/layout/Header";
import Footer from "./component/layout/Footer";
import Home from "./component/home/Home";
import Signup from "./component/user/Signup";
import Login from "./component/user/Login";
import Summary from "./component/summary/Summary";

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

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
        <Routes>
          <Route path="/summary" element={<Summary />} />
        </Routes>
        <Footer />
      </Router>
    </Fragment>
  );
}

export default App;
