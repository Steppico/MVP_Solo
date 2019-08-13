import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { Component } from "react";
import Map from "./components/Map";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Map id="map" style={`z-index: 9`} />
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
