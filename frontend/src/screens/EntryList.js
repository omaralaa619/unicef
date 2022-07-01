import React from "react";
import Entry from "../components/Entry";

const EntryList = (props) => {
  return (
    <ul>
      {props.entries.map((entry) => (
        <Entry entry={entry} key={entry._id} />
      ))}
    </ul>
  );
};

export default EntryList;
