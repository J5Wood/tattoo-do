import React, { useState, useEffect } from "react";
import Studio from "../components/Studio";
const URL = "http://localhost:3000/studios";

const StudiosContainer = () => {
  const [studios, setStudios] = useState(null);

  useEffect(() => {
    fetch(URL)
      .then((resp) => resp.json())
      .then((data) => setStudios(data));
  }, []);

  const renderStudios = () => {
    if (studios) {
      return studios.map((studio) => {
        return <Studio studioData={studio} key={studio.id} />;
      });
    }
  };

  return (
    <>
      <h1>Studios</h1>
      {renderStudios()}
    </>
  );
};

export default StudiosContainer;
