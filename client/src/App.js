import "./App.css";
import { Fragment } from "react";
import Header from "./component/layout/Header";
import Footer from "./component/layout/Footer";
import Home from "./component/home/Home";

function App() {
  return (
    <Fragment>
      <Header />
      <Home />
      <Footer />
    </Fragment>
  );
}

export default App;
