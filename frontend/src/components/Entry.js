import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import classes from "./Entry.module.css";

import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import EditIcon from "@mui/icons-material/Edit";

const Entry = (props) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const deleteHandler = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      await axios.delete(`api/entries/${props.entry._id}`, config);

      props.setDeleted(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={classes.entry}>
      <Link to={`/entry/${props.entry._id}`}>
        <h1 className={classes.title}>{props.entry.institutionName}</h1>

        <div className={classes.info}>
          <div className={classes.left}>
            <p>
              <span> تكلفة الخدمة : </span>
              {props.entry.serviceIsFree}
            </p>
            <p>
              <span>ايام تقديم الخدمة : </span>
              {props.entry.serviceDays}
            </p>
          </div>

          <div className={classes.right}>
            <p>
              <span>اسم المقرر: </span>
              {props.entry.inChargeName}
            </p>
            <p>
              <span>المحافظة: </span>
              {props.entry.institutionAdress}
            </p>
          </div>
        </div>
      </Link>

      <div className={classes.buttons}>
        {userInfo && (
          <Button
            style={{
              color: "rgb(255, 55, 55)",
              borderColor: "rgb(255, 55, 55)",
            }}
            variant="outlined"
            startIcon={<DeleteIcon />}
            onClick={deleteHandler}
          >
            مسح
          </Button>
        )}
        {userInfo && (
          <Link to={`/entry/edit/${props.entry._id}`}>
            <Button variant="outlined" startIcon={<EditIcon />}>
              تعديل
            </Button>
          </Link>
        )}

        <Link to={`/entry/${props.entry._id}`}>
          <Button startIcon={<ReadMoreIcon />} variant="contained">
            اقرأ المزيد
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Entry;
