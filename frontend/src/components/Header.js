import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions";
import Avatar from "@mui/material/Avatar";

import classes from "./Header.module.css";
import unicefLogo from "../assets/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);

  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <header>
      <div className={classes.headercontainer}>
        <Link to={`/`}>
          <img className={classes.logtainer} src={unicefLogo} alt="" />
        </Link>
        <ul className={classes.navlinks}>
          <Link to={`/`}>
            <li>Home a7a</li>
          </Link>
          <Link to={`/login`}>
            <li>Login</li>
          </Link>
          <Link to={`/profile`}>
            <li>profile</li>
          </Link>
          <Link to={`/new`}>
            <li>create Entry</li>
          </Link>

          {userInfo && <Avatar>OA</Avatar>}
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
