import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
// const URL = "http://localhost:3000/";

const App = () => {
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   fetch(URL + "artists")
  //     .then((resp) => resp.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  // }, []);

  // const renderData = () => {
  //   if (data) {
  //     return <div>{data}</div>;
  //   }
  // };

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<NavBar />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
