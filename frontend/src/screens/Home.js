import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

import EntryList from "./EntryList";

const Home = (props) => {
  return (
    <>
      {!props.loading && (
        <EntryList
          entries={props.entries}
          deleted={props.deleted}
          delete={props.delete}
        />
      )}
      {props.loading && <CircularProgress />}
    </>
  );
};

export default Home;
