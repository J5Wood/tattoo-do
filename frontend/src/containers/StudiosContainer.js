import React from "react";
import Studio from "../components/Studio";
import { useSelector } from "react-redux";
import { selectAllStudios } from "../reducers/studioReducer";

const StudiosContainer = () => {
  const studios = useSelector(selectAllStudios);
  const error = useSelector((state) => state.studios.error);
  const studioStatus = useSelector((state) => state.studios.status);

  let content;

  if (studioStatus === "loading") {
    content = <h3>Loading...</h3>;
  } else if (studioStatus === "succeeded") {
    content = studios.map((studio) => {
      return <Studio studioData={studio} key={studio.id} />;
    });
  } else if (studioStatus === "failed") {
    content = <div>{error}</div>;
  }

  return (
    <div>
      <h1>Studios</h1>
      {content}
    </div>
  );
};

export default StudiosContainer;
