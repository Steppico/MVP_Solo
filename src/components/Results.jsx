import React from "react";
import { connect } from "react-redux";
import rocket_success from "../icons/rocket-success.png";
import rocket_failure from "../icons/rocket-failure.png";
import Options from "./Options";
import "../styles/results.css";

const Results = props => {
  const spawnResults = () => {
    return (
      <div>
        <div>name: {props.selectedAgency}</div>
        <Options />
        {props.filteredResults.map((launch, index) => {
          return (
            <div className="result__mission">
              <p>
                Mission #{index}: {launch.name}
              </p>
              {launch.net ? <p>Mission date: {launch.net}</p> : ""}
              {launch.mission ? (
                <p>Description: {launch.mission.description}</p>
              ) : (
                ""
              )}
              <p className="block__result__status">Status:</p>
              <div>
                {launch.status.name === "Success" ? (
                  <img src={rocket_success} alt="success" />
                ) : (
                  <img src={rocket_failure} alt="failure" />
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
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
