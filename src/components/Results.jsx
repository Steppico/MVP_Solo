import React from "react";
import { connect } from "react-redux";

const Results = props => {
  const spawnResults = () => {
    return <div>name: {props.selectedAgency}</div>;
  };

  return (
    <div className="block__results">
      <div className="results__name">{spawnResults()}</div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    ...state
  };
};
const mapDispatchToProps = dispatch => {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Results);
