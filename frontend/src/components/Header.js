import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions";

import classes from "./Header.module.css";
import unicefLogo from "../assets/logo.svg";
import { Link } from "react-router-dom";

import AvatarIcon from "./AvatarIcon";

const Header = (props) => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);

  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  const closeSearchHandler = () => {
    props.setIsSearchOpen(false);
  };

  const searchHandler = () => {
    props.setIsSearchOpen(!props.isSearchOpen);
  };
  return (
    <header id="header">
      <div className={classes.headercontainer}>
        <Link to={`/`}>
          <img className={classes.logtainer} src={unicefLogo} alt="" />
        </Link>

        <ul className={classes.navlinks}>
          <Link to={`/`}>
            <li className={classes.search} onClick={searchHandler}>
              بحث
            </li>
          </Link>

          <Link to={`/`}>
            <li>الرئيسية</li>
          </Link>

          {!userInfo && (
            <Link to={`/login`}>
              <li>تسجيل الدخول</li>
            </Link>
          )}

          {userInfo && (
            <Link to={`/new`} onClick={closeSearchHandler}>
              <li>إنشاء بيانات</li>
            </Link>
          )}

          {userInfo && <AvatarIcon closeSearch={closeSearchHandler} />}
        </ul>
      </div>
    </header>
  );
};

export default Header;
