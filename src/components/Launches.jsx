import React, { Component } from "react";
import { getSpecs } from "../getData";
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
          <input type="Submit" className="button__previous" />
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
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Launches);
