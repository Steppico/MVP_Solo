import React from "react";
import { connect } from "react-redux";

const Options = props => {
  const eventHandler = event => {
    if (event) {
      props.filterResults(event.currentTarget.value, props.prevLaunches);
    } else {
      props.showAll(props.prevLaunches);
    }
  };
  return (
    <>
      <form class="options__radio_button">
        <input
          type="radio"
          name="opt"
          value="Success"
          onChange={e => {
            eventHandler(e);
          }}
        />
        Only successes
        <input
          type="radio"
          name="opt"
          value="Failure"
          onChange={e => {
            eventHandler(e);
          }}
        />
        Only failures
        <input
          type="radio"
          name="opt"
          value="All"
          onChange={() => {
            eventHandler();
          }}
        />{" "}
        All
      </form>
      {props.prevLaunches.length === 0 ? <p>No results</p> : ""}
    </>
  );
};

const mapStateToProps = state => {
  return {
    ...state
  };
};
const mapDispatchToProps = dispatch => {
  return {
    filterResults: (filter, prevLaunches) => {
      const realFilter = prevLaunches.filter(
        launch => launch.status.name === filter
      );
      dispatch({
        type: "SET_FILTER",
        realFilter
      });
    },
    showAll: reset => {
      dispatch({
        type: "CLEAR_FILTER",
        reset
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Options);
