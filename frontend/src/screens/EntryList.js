import React from "react";
import Entry from "../components/Entry";
import classes from "./EntryList.module.css";

const EntryList = (props) => {
  return (
    <ul className={classes.list}>
      {props.entries.map((entry) => (
        <Entry entry={entry} key={entry._id} setDeleted={props.setDeleted} />
      ))}
    </ul>
  );
};

export default EntryList;
