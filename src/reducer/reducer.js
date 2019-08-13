const defaultState = {
  agencies: ["Nasa", "Jaxa", "Roscosmos", "ESA", "SpaceX"],
  selectedAgency: null,
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
      return {
        ...state,
        selectedAgency:
          action.reply.query.search.slice(0, 1).toUpperCase() +
          action.reply.query.search.slice(1).toLowerCase(),
        prevLaunches: action.reply.answerToQuery.results
      };
    }
    default:
      return state;
  }
};

export default reducer;
