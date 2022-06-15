import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Locations from "./containers/LocationsContainer";
import Studios from "./containers/StudiosContainer";
import Artists from "./containers/ArtistsContainer";
import HomePage from "./containers/HomePage";
import "./App.css";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/*" element={<HomePage />}></Route>
        <Route exact path="/locations" element={<Locations />}></Route>
        <Route exact path="/studios" element={<Studios />}></Route>
        <Route exact path="/artists" element={<Artists />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
