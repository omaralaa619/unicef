import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewEntryScreen = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  let navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(`api/entries`, {
        title,
        description,
      });

      const entryId = data._id;

      navigate(`/entry/${entryId}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
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
    </>
  );
};

export default NewEntryScreen;
