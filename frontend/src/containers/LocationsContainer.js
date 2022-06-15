import React, { useEffect } from "react";
import Location from "../components/Location";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllLocations,
  fetchLocations,
} from "../reducers/locationReducer";

const LocationsContainer = () => {
  const locations = useSelector(selectAllLocations);
  const error = useSelector((state) => state.locations.error);
  const locationStatus = useSelector((state) => state.locations.status);
  const dispatch = useDispatch;

  useEffect(() => {
    if (locationStatus === "idle") {
      dispatch(fetchLocations());
    }
  }, [locationStatus, dispatch]);

  let content;

  if (locationStatus === "loading") {
    content = <h3>Loading...</h3>;
  } else if (locationStatus === "succeeded") {
    content = locations.map((location) => {
      return <Location locationData={location} key={location.id} />;
    });
  } else if (locationStatus === "failed") {
    content = <div>{error}</div>;
  }

  return (
    <div>
      <h1>Locations</h1>
      {content}
    </div>
  );
};

export default LocationsContainer;
