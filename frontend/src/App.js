import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import New from "./screens/New";
import Home from "./screens/Home";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import Header from "./components/Header";
import EntryScreen from "./screens/EntryScreen";
import ProfileScreen from "./screens/ProfileScreen";
import "./App.css";

function App() {
  const [entries, setEntries] = useState([]);

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
  }, [setEntries]);

  console.log(loading);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home entries={entries} loading={loading} />}
        />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/entry/:id" element={<EntryScreen entries={entries} />} />

        <Route path="/new" element={<New />} />
      </Routes>
    </div>
  );
}

export default App;
