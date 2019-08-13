import React from "react";
import { Marker } from "react-mapbox-gl";

const defaultState = {
  launches: [],
  locations: [],
  showMarker: null
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_STATE": {
      console.log(action.action.prevLaunches.results);
      return {
        prevLaunches: action.action.prevLaunches.results
      };
    }
    default:
      return state;
  }
};

export default reducer;
