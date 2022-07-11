import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Home from "./screens/Home";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import Header from "./components/Header";
import EntryScreen from "./screens/EntryScreen";
import ProfileScreen from "./screens/ProfileScreen";
import NewEntryScreen from "./screens/NewEntryScreen";
import EntryEditScreen from "./screens/EntryEditScreen";
import "./App.css";

function App() {
  const [entries, setEntries] = useState([]);

  const [deleted, setDeleted] = useState("a7a");

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        setLoading(true);

        const res = await axios.get("/api/entries");

        setLoading(false);

        setEntries(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchEntries();
  }, [setEntries, setDeleted]);

  console.log(loading);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              entries={entries}
              loading={loading}
              deleted={setDeleted}
              delete={deleted}
            />
          }
        />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/new" element={<NewEntryScreen />} />
        <Route path="/entry/edit/:id" element={<EntryEditScreen />} />
        <Route path="/entry/:id" element={<EntryScreen entries={entries} />} />
      </Routes>
    </div>
  );
}

export default App;
