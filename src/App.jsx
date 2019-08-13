import React from "react";
import "../src/styles/App.css";
import { connect } from "react-redux";
import { Component } from "react";
import Map from "./components/Map";
import InfoHome from "./components/InfoHome";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <h1>LIFTOFF</h1>
          <Map className="Map__component" style={`z-index: 9`} />
          <InfoHome />
        </div>
      </div>
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
)(App);
