import React from "react";

const Studio = ({ studioData }) => {
  const { name } = studioData;
  return (
    <>
      <h1>{name}</h1>
    </>
  );
};

export default Studio;
