import React, { useState, useEffect } from "react";
import Location from "../components/Location";
import { useSelector, useDispatch } from "react-redux";
import { addLocation, addNewLocation } from "../reducers/locationReducer";
// const URL = "http://localhost:3000/locations";

const LocationsContainer = () => {
  const locations = useSelector((state) => state.locations);
  const dispatch = useDispatch();

  // debugger;
  // debugger;
  // const [locations, setLocations] = useState(null);

  // useEffect(() => {
  //   fetch(URL)
  //     .then((resp) => resp.json())
  //     .then((data) => {
  //       setLocations(data);
  //     });
  // }, []);

  const renderLocations = () => {
    if (locations) {
      const locationsList = locations.map((location) => {
        return <Location locationData={location} key={location.id} />;
      });
      return locationsList;
    }
  };

  return (
    <div>
      <h1>Locations</h1>
      {renderLocations()}
    </div>
  );
};

export default LocationsContainer;
