import React, { Fragment, useEffect, useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { login, clearErrors } from "../../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import loginimg from "../../images/loginimg.png";

const Login = () => {
  const dispatch = useDispatch();

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginEmail, loginPassword));
  };

  useEffect(() => {
    if (error) {
      window.alert(error);
      dispatch(clearErrors());
    }

    if (isAuthenticated) {
      window.location.href = "/";
    }
  }, [dispatch, error, isAuthenticated]);

  return (
    <Fragment>
      <div className="login-page">
        <section className="login-container">
          <article className="form-container">
            <form className="form" onSubmit={handleSubmit}>
              <div className="intro">
                <h1>Login</h1>
                <Link to="/signup">New here?</Link>
              </div>
              <div className="email-input">
                <div className="input-container">
                  <p className="sub-title">Email Address</p>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="email-input">
                <div className="input-container">
                  <p className="sub-title">Password</p>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    required
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                  />
                </div>
              </div>

              <Link to="/password/forgot">Forgot Password?</Link>
              <br />
              <input type="submit" value="Login" className="loginBtn" />
            </form>
          </article>
          <article className="login-side-bg">
            <img src={loginimg} />
          </article>
        </section>
      </div>
    </Fragment>
  );
};

export default Login;
