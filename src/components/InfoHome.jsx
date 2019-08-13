import React, { Component } from "react";
import { connect } from "react-redux";
import Launches from "./Launches";
import Results from "./Results";

class InfoHome extends Component {
  render() {
    return (
      <>
        <Launches />
        <Results />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state
  };
};
const mapDispatchToProps = dispatch => {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InfoHome);
