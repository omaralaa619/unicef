import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const EntryEditScreen = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // FETCH ENTRY THAT WILL BE EDITED

  let match = useParams();

  useEffect(() => {
    const fetchEntry = async () => {
      const { data } = await axios.get(`/api/entries/${match.id}`);

      setTitle(data.title);
      setDescription(data.description);
    };
    fetchEntry();
  }, [match.id]);

  console.log(title);
  const submitHandler = () => {};
  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default EntryEditScreen;
