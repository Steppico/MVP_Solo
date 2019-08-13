import React from "react";
import { connect } from "react-redux";
import { Pie } from "react-chartjs-2";
import "../styles/stats.css";

const Stats = props => {
  const countFunc = (launches, method) => {
    let count = 0;
    launches.filter(launch => {
      if (launch.status.name === method) return count++;
    });
    props.storeVariable(count, method);
    return count;
  };

  return (
    console.log(props) || (
      <div className="block__stats">
        {props.selectedAgency ? (
          <>
            <h1>Stats for: {props.selectedAgency}</h1>
            <div className="block__numberLaunches">
              <p>
                Number of launches:{" "}
                {props[props.selectedAgency.toLowerCase()].length}
              </p>
              <p>
                Failures:{" "}
                {countFunc(
                  props[props.selectedAgency.toLowerCase()],
                  "Failure"
                )}
              </p>
              <p>
                Successes:{" "}
                {countFunc(
                  props[props.selectedAgency.toLowerCase()],
                  "Success"
                )}
              </p>
              <p>
                Success/Fail ratio:{" "}
                {`${Math.ceil(props.Success / props.Failure)}/1`}
              </p>
              <p>On a graph:</p>
              <div class_name="pie__chart">
                <Pie
                  data={{
                    labels: ["Failures", "Successes"],
                    datasets: [
                      {
                        data: [props.Failure, props.Success],
                        backgroundColor: ["red", "green"]
                      }
                    ]
                  }}
                />
              </div>
            </div>
          </>
        ) : (
          "Please select an agency first"
        )}
      </div>
    )
  );
};

const mapStateToProps = state => {
  return {
    ...state
  };
};
const mapDispatchToProps = dispatch => {
  return {
    storeVariable: (count, method) => {
      dispatch({
        type: "STORE_VAR",
        payload: { count, method }
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stats);
