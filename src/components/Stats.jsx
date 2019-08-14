import React from "react";
import { connect } from "react-redux";
import { Pie, defaults } from "react-chartjs-2";
import "../styles/stats.css";

defaults.global.responsive = false;

const Stats = props => {
  const countFunc = (launches, method) => {
    let count = 0;
    launches.filter(launch => {
      if (launch.status.name === method) {
        return count++;
      } else {
        return null;
      }
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
            <h1 className="results__text">Stats for: {props.selectedAgency}</h1>
            <div className="block__numberLaunches">
              <div className="block__launch__num left">
                Number of launches:{" "}
                <div className="right">
                  {props[props.selectedAgency.toLowerCase()].length}
                </div>
              </div>
              <div className="block__launch__fail left">
                Failures:{" "}
                <div className="right">
                  {countFunc(
                    props[props.selectedAgency.toLowerCase()],
                    "Failure"
                  )}
                </div>
              </div>
              <div className="block__launch__win left">
                Successes:{" "}
                <div className="right">
                  {countFunc(
                    props[props.selectedAgency.toLowerCase()],
                    "Success"
                  )}
                </div>
              </div>
              <div className="block__successfail__ratio left">
                Success/Fail ratio:{" "}
                <div className="right">
                  {Math.ceil(props.Success / props.Failure) === Infinity
                    ? "100%"
                    : `${Math.ceil(props.Success / props.Failure)}/1`}
                </div>
              </div>
              <div className="block__preferredlaunch__country left">
                Preferred Launch Country:
                <div className="right">
                  {prefCountry(props[props.selectedAgency.toLowerCase()])}
                </div>
              </div>
              <div className="block__pie__chart">
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
                  options={{
                    maintainAspectRatio: false
                  }}
                  width={250}
                  height={250}
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
