import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { login, clearErrors } from "../actions/userActions";
import { useDispatch, useSelector } from "react-redux";

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
      <section class="login-container">
        <article class="form-container">
          <div class="intro">
            <h1>Login</h1>
            <p>Please Enter Your details</p>
          </div>

          <form class="form" onSubmit={handleSubmit}>
            <div class="email-input">
              <div class="input-container">
                <p class="sub-title">Email Address</p>
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

            <div class="email-input">
              <div class="input-container">
                <p class="sub-title">Password</p>
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
      </section>
    </Fragment>
  );
};

export default Login;
