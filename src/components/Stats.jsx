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

  const prefCountry = agencies => {
    const countryHash = {};
    agencies.map(agency =>
      countryHash[agency.pad.location.country_code] === undefined
        ? (countryHash[agency.pad.location.country_code] = 1)
        : countryHash[agency.pad.location.country_code]++
    );
    const result = { country: "", count: 0 };
    for (const country in countryHash) {
      console.log("cococontry", countryHash[country]);
      if (countryHash[country] > result.count) {
        result.country = country;
        result.count = countryHash[country];
      }
    }
    return `${result.country} (${result.count})`;
  };

  return (
    console.log(props) || (
      <div className="block__stats">
        {props.selectedAgency ? (
          <>
            <h1>Stats for: {props.selectedAgency}</h1>
            <div className="block__numberLaunches">
              <div className="block__launch__num">
                Number of launches:{" "}
                <div className="launch__num">
                  {props[props.selectedAgency.toLowerCase()].length}
                </div>
              </div>
              <div className="block__launch__fail">
                Failures:{" "}
                <div className="launch__fail">
                  {countFunc(
                    props[props.selectedAgency.toLowerCase()],
                    "Failure"
                  )}
                </div>
              </div>
              <div className="block__launch__win">
                Successes:{" "}
                <div className="launch__win">
                  {countFunc(
                    props[props.selectedAgency.toLowerCase()],
                    "Success"
                  )}
                </div>
              </div>
              <div className="block__successfail__ratio">
                Success/Fail ratio:{" "}
                <div className="successfail__ratio">
                  {`${Math.ceil(props.Success / props.Failure)}/1`}
                </div>
              </div>
              <div className="block__pie__chart">
                On a graph:
                <Pie
                  className="pie__chart"
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
              <div className="block__preferredlaunch__country">
                Preferred Launch Country:
                <div className="preferredlaunch__country">
                  {prefCountry(props[props.selectedAgency.toLowerCase()])}
                </div>
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
