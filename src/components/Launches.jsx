import React, { Component } from "react";
import { getSpecs, getData } from "../getData";
import { connect } from "react-redux";

class Launches extends Component {
  agenciesDropDown = agencies => {
    return agencies.map(agency => {
      return <option value={agency.toLowerCase()}>{agency}</option>;
    });
  };

  eventHandler = e => {
    if (!this.props[e.target.value]) this.props.getAgencyMarker(e.target.value);
    else {
      this.props.liftData(this.props[e.target.value], e.target.value);
    }
  };

  render() {
    return (
      <>
        <div className="block__previous">
          <select
            className="select__agency__dropdown"
            onChange={e => {
              this.eventHandler(e);
            }}
          >
            <option value="Agency">Select agency</option>
            {this.agenciesDropDown(this.props.agencies)}
          </select>
          <button
            className="button__all"
            onClick={() => {
              this.props.launchData();
            }}
          >
            See all launches
          </button>
          <button
            className="button__clear"
            onClick={() => {
              this.props.clearMap();
            }}
          >
            Clear Map
          </button>
          <button
            className="button__stats"
            onClick={() => {
              this.props.showStats();
            }}
          >
            Show Stats
          </button>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getAgencyMarker: async agency => {
      try {
        const reply = await getSpecs({ search: agency });
        dispatch({
          type: "GET_AGENCY",
          reply
        });
      } catch (err) {
        return new Error("Error", err);
      }
    },
    launchData: async () => {
      await getData().then(res =>
        dispatch({
          type: "SET_STATE",
          action: res
        })
      );
    },
    clearMap: () => {
      dispatch({
        type: "CLEAR_MAP"
      });
    },
    showStats: () => {
      dispatch({
        type: "SHOW_STATS"
      });
    },
    liftData: (agency, mission) => {
      dispatch({
        type: "GET_THE_AGENCY",
        payload: { agency, mission }
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Launches);
