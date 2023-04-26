import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { signup, clearErrors } from "../actions/userActions";
import { useDispatch, useSelector } from "react-redux";

const Signup = () => {
  const dispatch = useDispatch();

  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = user;

  const handleSubmit = (e) => {
    console.log("Form Submit");
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("password", password);

    dispatch(signup(myForm));
  };

  const registerDataChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
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
            <h1>Signup</h1>
            <p>Please Enter Your details</p>
          </div>

          <form class="form" onSubmit={handleSubmit}>
            <div class="email-input">
              <div class="input-container">
                <p class="sub-title">Name</p>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={name}
                  onChange={registerDataChange}
                />
              </div>
            </div>

            <div class="email-input">
              <div class="input-container">
                <p class="sub-title">Email Address</p>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={email}
                  onChange={registerDataChange}
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
                  value={password}
                  onChange={registerDataChange}
                />
              </div>
            </div>

            <Link to="/password/forgot">Forgot Password?</Link>
            <br />
            <input type="submit" value="Signup" className="singupBtn" />
          </form>
        </article>
      </section>
    </Fragment>
  );
};

export default Signup;
