import React, { useState, useEffect } from "react";
const URL = "http://localhost:3000/";

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(URL + "artists")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  const renderData = () => {
    if (data) {
      return <div>{data}</div>;
    }
  };

  return (
    <main>
      <h1>React app with Webpack and Babel</h1>
      <div>{renderData()}</div>
    </main>
  );
};

export default App;
