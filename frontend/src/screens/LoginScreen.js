import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userActions";

import classes from "./LoginScreen.module.css";
import unicefLogo from "../assets/uniceflogo.png";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { CircularProgress } from "@mui/material";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [userInfo, redirect, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <>
      <div className={classes.formcontainer}>
        <img className={classes.logtainer} src={unicefLogo} alt="" />
        <form className={classes.form} onSubmit={submitHandler}>
          {error && <p>{error}</p>}
          <label htmlFor="email" className={classes.label}>
            Email
          </label>

          <TextField
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            size="small"
          />

          <label htmlFor="password" className={classes.label}>
            Password
          </label>

          <TextField
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            size="small"
          />

          <div className={classes.button}>
            <Button variant="contained" type="submit">
              Login {loading && <CircularProgress color="secondary" />}
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
