import React from "react";

import EntryList from "./EntryList";

const Home = (props) => {
  return (
    <>
      {!props.loading && <EntryList entries={props.entries} />}
      {props.loading && <h2>Loading...</h2>}
    </>
  );
};

export default Home;
