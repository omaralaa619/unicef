import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

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
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Link to={`/entry/${props.entry._id}`}>
        <h1>{props.entry.title}</h1>
        <h2>{props.entry.description}</h2>
      </Link>
      <button onClick={deleteHandler}>delete</button>
    </>
  );
};

export default Entry;
