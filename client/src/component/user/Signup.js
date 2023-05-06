import React, { Fragment, useEffect, useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import { signup, clearErrors } from "../../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import signupimg from "../../images/loginimg.png";

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
      <div className="signup-page">
        <section class="signup-container">
          <article className="login-side-bg">
            <img src={signupimg} />
          </article>
          <article class="form-container">
            <form class="form" onSubmit={handleSubmit}>
              <div class="intro">
                <h1>Signup</h1>
                <p>Please Enter Your details</p>
              </div>
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

              <Link to="/login">Already a user?</Link>
              <br />
              <input type="submit" value="Signup" className="singupBtn" />
            </form>
          </article>
        </section>
      </div>
    </Fragment>
  );
};

export default Signup;
