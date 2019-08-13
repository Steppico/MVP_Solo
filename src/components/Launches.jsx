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
    this.props.getAgencyMarker(e.target.value);
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
            class="button__clear"
            onClick={() => {
              this.props.clearMap();
            }}
          >
            Clear Map
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
      const reply = await getSpecs({ search: agency });
      dispatch({
        type: "GET_AGENCY",
        reply
      });
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
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Launches);
