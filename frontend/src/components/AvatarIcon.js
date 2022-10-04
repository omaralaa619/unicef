import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../actions/userActions";

import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

import Button from "@mui/material/Button";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ListItemIcon from "@mui/material/ListItemIcon";
import Logout from "@mui/icons-material/Logout";
import PersonAdd from "@mui/icons-material/PersonAdd";
import PersonIcon from "@mui/icons-material/Person";

import { useDispatch, useSelector } from "react-redux";

const AvatarIcon = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
  };

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
      <Button
        endIcon={
          <ArrowDropDownIcon
            style={{
              color: "white",
              marginLeft: -10,
              marginBottom: -7,
            }}
          />
        }
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Avatar>{letterName}</Avatar>
      </Button>
      <Menu
        style={{
          marginLeft: -15,
        }}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonIcon fontSize="small" />
          </ListItemIcon>
          <Link to={`/profile`} onClick={props.closeSearch}>
            <li>الحساب</li>
          </Link>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          <Link to={`/register`} onClick={props.closeSearch}>
            <li>إنشاء المستخدم</li>
          </Link>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          <li onClick={logoutHandler}>تسجيل خروج</li>
        </MenuItem>
      </Menu>
    </>
  );
};

export default AvatarIcon;
