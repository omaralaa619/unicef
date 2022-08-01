import React from "react";

import Avatar from "@mui/material/Avatar";
import { useSelector } from "react-redux";

const AvatarIcon = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const click = () => {
    console.log(nameArr);
  };
  const name = userInfo.name;

  const nameArr = name.split(" ");

  let letterName = "";

  if (nameArr.length === 1) {
    letterName = `${nameArr[0][0].toUpperCase()}`;
  }
  if (nameArr.length === 2) {
    letterName = `${nameArr[0][0].toUpperCase()}${nameArr[1][0].toUpperCase()}`;
  }
  if (nameArr.length > 2) {
    letterName = `${nameArr[0][0].toUpperCase()}${nameArr[
      nameArr.length - 1
    ][0].toUpperCase()}`;
  }

  return (
    <>
      <Avatar>{letterName}</Avatar>
      <p onClick={click}>my name is</p>
    </>
  );
};

export default AvatarIcon;
