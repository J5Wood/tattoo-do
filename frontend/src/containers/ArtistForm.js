import React from "react";
import { useSelector } from "react-redux";
import { selectAllLocations } from "../reducers/locationReducer";
import { selectAllStudios } from "../reducers/studioReducer";
import { selectAllStyles } from "../reducers/artistReducer";

const ArtistForm = () => {
  const locations = useSelector(selectAllLocations);
  const studios = useSelector(selectAllStudios);
  const styles = useSelector(selectAllStyles);
  const newStyleInput = document.getElementById("new-style");

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

  const renderStyles = () => {
    const styleSelections = [<option key="none"></option>];
    for (let val of styles) {
      styleSelections.push(
        <option value="val" key="val">
          {val}
        </option>
      );
    }
    styleSelections.push(<option key="new">Add New Style</option>);
    return styleSelections;
  };

  const handleStyleChange = (e) => {
    if (e.target.value === "Add New Style") {
      newStyleInput.style.display = "";
    } else {
      newStyleInput.style.display = "none";
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const name = e.target.children[2].value;
    const style = e.target.children[4].value;
    const city = e.target.children[6].value;
    const studio = e.target.children[8].value;
    debugger;
  };

  const displayNone = {
    display: "none",
  };

  return (
    <form className="artist-form" onSubmit={handleFormSubmit}>
      <h3>New Artist</h3>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" required></input>
      <label htmlFor="style">Style</label>
      <select onChange={handleStyleChange}>{renderStyles()}</select>
      <input type="text" id="new-style" style={displayNone}></input>
      <label htmlFor="city">City</label>
      <select type="text" id="city">
        {renderLocations()}
      </select>
      <label>Studio</label>
      <select type="text" id="studio">
        {renderStudios()}
      </select>
      <input type="submit"></input>
    </form>
  );
};

export default ArtistForm;
