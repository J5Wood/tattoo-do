import React from "react";
import { useSelector } from "react-redux";
import { selectAllLocations } from "../reducers/locationReducer";
import { selectAllStudios } from "../reducers/studioReducer";

const ArtistForm = () => {
  const locations = useSelector(selectAllLocations);
  const studios = useSelector(selectAllStudios);

  const renderLocations = () => {
    return locations.map((location) => {
      return (
        <option value={location.id} key={location.id}>
          {location.city}
        </option>
      );
    });
  };

  const renderStudios = () => {
    return studios.map((studio) => {
      return (
        <option value={studio.id} key={studio.id}>
          {studio.name}
        </option>
      );
    });
  };

  return (
    <form className="artist-form">
      <h3>New Artist</h3>
      <label htmlFor="name">Name</label>
      <input type="text" id="name"></input>
      <label htmlFor="city">City</label>
      <select type="text" id="city">
        {renderLocations()}
      </select>
      <label>Studio</label>
      <select type="text" id="studio">
        {renderStudios()}
      </select>
    </form>
  );
};

export default ArtistForm;
