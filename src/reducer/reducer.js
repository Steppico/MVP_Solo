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
  zoom: [4.2],
  waitLoad: false
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_STATE": {
      const result = action.action.prevLaunches.results;

      return {
        ...state,
        prevLaunches: result,
        filteredResults: result
      };
    }
    case "STORE_VAR": {
      const country = action.payload;
      state[country.method] = country.count;

      return { ...state };
    }
    case "CLEAR_MAP": {
      return {
        ...state,
        results: false,
        selectedAgency: null,
        showMarker: null,
        prevLaunches: null,
        filteredResults: [],
        centerMap: [137.2529, 38.7048],
        zoom: [4.2]
      };
    }
    case "GET_AGENCY": {
      const agency = action.payload.reply.query.search;
      const parseAgency = action.payload.reply.answerToQuery.results;
      state[agency] = parseAgency;

      return {
        ...state,
        selectedAgency:
          agency.slice(0, 1).toUpperCase() + agency.slice(1).toLowerCase(),
        prevLaunches: parseAgency,
        filteredResults: parseAgency,
        results: true
      };
    }
    case "GET_THE_AGENCY": {
      const mission = action.payload.mission;
      const agency = action.payload.agency;

      return {
        ...state,
        selectedAgency:
          mission.slice(0, 1).toUpperCase() + mission.slice(1).toLowerCase(),
        prevLaunches: agency
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
    case "UPDATE_VIEW": {
      return { ...state, centerMap: action.coord, zoom: [10] };
    }
    default:
      return state;
  }
};

export { reducer, defaultState };
