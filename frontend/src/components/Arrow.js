import React from "react";

import classes from "./Arrow.module.css";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Arrow = () => {
  return (
    <a href="#header" className={classes.arrow}>
      <KeyboardArrowUpIcon
        style={{
          color: "#004c99",
          width: 30,
          height: 30,
          backgroundColor: "#c2e0ff",
          borderRadius: 50,
        }}
      />
    </a>
  );
};

export default Arrow;
