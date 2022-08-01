import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import classes from "./Entry.module.css";

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

      <button onClick={deleteHandler}>delete</button>
    </div>
  );
};

export default Entry;
