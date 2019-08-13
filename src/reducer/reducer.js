const defaultState = {
  agencies: ["Nasa", "Jaxa", "Roscosmos", "ESA", "SpaceX"],
  showMarker: null,
  prevLaunches: []
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_STATE": {
      return {
        ...state,
        prevLaunches: action.action.prevLaunches.results
      };
    }
    case "GET_AGENCY": {
      console.log("I AM HERE!", action);
      return {
        ...state
      };
    }
    default:
      return state;
  }
};

export default reducer;
