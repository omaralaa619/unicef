import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions";

const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);

  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <div>
      {userInfo && <h1>{userInfo.name}</h1>}
      <button onClick={logoutHandler}>Logout</button>
    </div>
  );
};

export default Header;
