import React, { useState, useEffect } from "react";
import Location from "../components/Location";
const URL = "http://localhost:3000/locations";

const LocationsContainer = () => {
  const [locations, setLocations] = useState(null);

  useEffect(() => {
    fetch(URL)
      .then((resp) => resp.json())
      .then((data) => {
        setLocations(data);
      });
  }, []);

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
