import React from "react";
import { connect } from "react-redux";
import Launches from "./Launches";
import Results from "./Results";
import Stats from "./Stats";

const InfoHome = props => {
  return (
    <>
      <Launches />
      {props.results === true ? <Results /> : ""}
      {props.showStats === true ? <Stats /> : ""}
    </>
  );
};

const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(mapStateToProps)(InfoHome);
