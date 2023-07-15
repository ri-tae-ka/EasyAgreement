import React, { Fragment, useEffect, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, logout } from "../../actions/userActions";
import logo from "../../images/logo.png";
import { useAuth } from "@pangeacyber/react-auth";

const Header = () => {
  const dispatch = useDispatch();

  const auth = useAuth();

  const { user } = useAuth();
  const { authenticated, login, logout } = useAuth();

  const handleLogin = () => {
    auth.login({ returnPath: "/" });
  };

  // const { user, loading, isAuthenticated, error } = useSelector(
  //   (state) => state.user
  // );

  // useEffect(() => {
  //   if (error) {
  //     dispatch(clearErrors());
  //   }
  // }, [dispatch, error]);

  // const handleLogout = () => {
  //   dispatch(logout());
  // };

  return (
    <Fragment>
      <nav class="nav">
        <input type="checkbox" id="nav-check" />
        <div class="nav-header">
          <div class="nav-title">
            <Link to="/">
              <img className="nav-logo" src={logo} alt="logo" />
            </Link>
          </div>
        </div>

        <ul class="nav-list">
          <li>
            <a href="/">home</a>
          </li>
          {authenticated ? (
            <li>
              <Link to="/summary">summarize contracts</Link>
            </li>
          ) : (
            <li>
              <Link to="/about">about</Link>
            </li>
          )}
          {authenticated ? (
            <li>
              <Link to="/summaries">{user.profile.first_name}</Link>
            </li>
          ) : (
            <li>
              <Link to="/login" onClick={() => login()}>login</Link>
            </li>
          )}
          {authenticated && (
            <li>
              <a href="/" onClick={() => logout(false)}>
                logout
              </a>
            </li>
          )}
        </ul>
      </nav>
    </Fragment>
  );
};

export default Header;
