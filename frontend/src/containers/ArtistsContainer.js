import React, { useState, useEffect } from "react";
import Artist from "../components/Artist";
const URL = "http://localhost:3000/artists";

const Artists = () => {
  const [artists, setArtists] = useState(null);

  useEffect(() => {
    fetch(URL)
      .then((resp) => resp.json())
      .then((data) => {
        setArtists(data);
      });
  }, []);

  const renderArtists = () => {
    if (artists) {
      const artistList = artists.map((artist) => {
        return <Artist artistData={artist} key={artist.id} />;
      });
      return artistList;
    }
  };

  return (
    <>
      <h1>Artists</h1>
      {renderArtists()}
    </>
  );
};

export default Artists;
