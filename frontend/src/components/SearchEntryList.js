import React from "react";
import Entry from "./Entry";
import classes from "./SearchEntryList.module.css";

const SearchEntryList = (props) => {
  return (
    <>
      <p>searrchh</p>
      <ul className={classes.list}>
        {props.entries.map((entry) => (
          <Entry entry={entry} key={entry._id} setDeleted={props.setDeleted} />
        ))}
      </ul>
      <p>searrchh</p>
    </>
  );
};

export default SearchEntryList;
