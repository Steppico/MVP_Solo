const defaultState = {
  agencies: ["Nasa", "Jaxa", "Roscosmos", "ESA", "SpaceX", "China Aerospace"],
  nasa: null,
  jaxa: null,
  roscosmos: null,
  esa: null,
  spacex: null,
  "china aerospace": null,
  selectedAgency: null,
  showMarker: null,
  prevLaunches: [],
  filteredResults: [],
  results: false,
  showStats: false,
  centerMap: [137.2529, 38.7048],
  zoom: [4.2]
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_STATE": {
      return {
        ...state,
        prevLaunches: action.action.prevLaunches.results,
        filteredResults: action.action.prevLaunches.results
      };
    }
    case "STORE_VAR": {
      state[action.payload.method] = action.payload.count;
      return { ...state };
    }
    case "CLEAR_MAP": {
      return {
        ...state,
        results: false,
        selectedAgency: null,
        showMarker: null,
        prevLaunches: null,
        filteredResults: []
      };
    }
    case "GET_AGENCY": {
      state[action.reply.query.search] = action.reply.answerToQuery.results;
      return {
        ...state,
        selectedAgency:
          action.reply.query.search.slice(0, 1).toUpperCase() +
          action.reply.query.search.slice(1).toLowerCase(),
        prevLaunches: action.reply.answerToQuery.results,
        filteredResults: action.reply.answerToQuery.results,
        results: true
      };
    }
    case "GET_THE_AGENCY": {
      return {
        ...state,
        selectedAgency:
          action.payload.mission.slice(0, 1).toUpperCase() +
          action.payload.mission.slice(1).toLowerCase(),
        prevLaunches: action.payload.agency
      };
    }
    case "SET_FILTER": {
      return {
        ...state,
        filteredResults: action.realFilter
      };
    }
    case "CLEAR_FILTER": {
      return { ...state, filteredResults: action.reset };
    }
    case "SHOW_STATS": {
      return { ...state, results: false, showStats: true };
    }
    default:
      return state;
  }
};

export { reducer, defaultState };
