import React, { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";

import EntryList from "./EntryList";
import SearchEntryList from "../components/SearchEntryList";

import classes from "./Home.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Home = (props) => {
  const [searchText, setSeachText] = useState("");
  const [searched, setSearched] = useState(false);
  const [filteredEntries, setfilteredEntries] = useState([]);

  const clearHandler = () => {
    setSearched(false);
    setfilteredEntries([]);
  };

  let filtered = [];

  filtered = props.entries.filter((entry) => {
    return entry.institutionName.includes(searchText);
  });

  const searchHandler = (e) => {
    e.preventDefault();
    console.log(searchText);
    console.log(filtered);
    setSearched(true);
    setfilteredEntries(filtered);
    console.log(filteredEntries.length);
  };

  let content = <CircularProgress />;
  if (!props.loading && filteredEntries.length === 0) {
    if (searched) {
      content = <p>no entries found</p>;
    } else {
      content = (
        <EntryList entries={props.entries} setDeleted={props.setDeleted} />
      );
    }
  }
  if (!props.loading && filteredEntries.length > 0) {
    content = <SearchEntryList entries={filteredEntries} />;
  }
  return (
    <div className={classes.searchcontainer}>
      {props.isSearchOpen && (
        <form className={classes.form} onSubmit={searchHandler}>
          <h2>البحث في قاعدة البيانات</h2>
          <TextField
            type="text"
            id="search"
            placeholder="search"
            value={searchText}
            onChange={(e) => setSeachText(e.target.value)}
            fullWidth={true}
          />
          <div>
            <Button variant="contained" size="small" onClick={clearHandler}>
              Clear
            </Button>
            <Button variant="contained" size="small" type="submit">
              Search
            </Button>
          </div>
        </form>
      )}

      {content}
    </div>
  );
};

export default Home;
