import React from "react";

const Artist = ({ artistData }) => {
  const { name, style } = artistData;
  return (
    <>
      <h1>{name}</h1>
      <h2>{style}</h2>
    </>
  );
};

export default Artist;
