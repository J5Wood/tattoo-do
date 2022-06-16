import React from "react";
import Artist from "../components/Artist";
import ArtistForm from "./ArtistForm";
import { useSelector } from "react-redux";
import { selectAllArtists } from "../reducers/artistReducer";

const ArtistsContainer = () => {
  const artists = useSelector(selectAllArtists);
  const error = useSelector((state) => state.artists.error);
  const artistStatus = useSelector((state) => state.artists.status);

  let content;

  if (artistStatus === "loading") {
    content = <h3>Loading...</h3>;
  } else if (artistStatus === "succeeded") {
    content = artists.map((artist) => {
      return <Artist artistData={artist} key={artist.id} />;
    });
  } else if (artistStatus === "failed") {
    content = <div>{error}</div>;
  }

  return (
    <div>
      <h1>Artists</h1>
      {content}
      <ArtistForm />
    </div>
  );
};

export default ArtistsContainer;
