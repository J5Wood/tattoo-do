import React from "react";

const Location = ({ locationData }) => {
  const { city, country } = locationData;
  return (
    <>
      <h1>{city}</h1>
      <h2>{country}</h2>
    </>
  );
};

export default Location;
