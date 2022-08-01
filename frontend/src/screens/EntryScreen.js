import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const EntryScreen = () => {
  const [entry, setEntry] = useState({});

  let match = useParams();

  useEffect(() => {
    const fetchEntry = async () => {
      const { data } = await axios.get(`/api/entries/${match.id}`);
      console.log(match.id);
      setEntry(data);
    };
    fetchEntry();
  }, [match.id, setEntry]);

  return (
    <div>
      <Link to={`/`}>
        <button>back</button>
      </Link>
      <h1>{entry.emergencyCases}</h1>
      <h1>{entry.institutionType}</h1>
      <h1>{entry.age1}</h1>
      <h1>{entry.age2}</h1>
      <h1>{entry.age3}</h1>
    </div>
  );
};

export default EntryScreen;
