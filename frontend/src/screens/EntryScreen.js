import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
  }, [match.id]);

  return (
    <div>
      <h1>{entry.title}</h1>
    </div>
  );
};

export default EntryScreen;