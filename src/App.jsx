import React from "react";
import "../src/styles/App.css";
import { connect } from "react-redux";
import { Component } from "react";
import Map from "./components/Map";
import Launches from "./components/Launches";
import Results from "./components/Results";
import Stats from "./components/Stats";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <h1>LIFTOFF</h1>
          {/* for now, Loading does nothing and won't appear. */}
          {this.props.waitLoad === false ? <Launches /> : <p>Loading...</p>}
          <Map className="Map__component" style={`z-index: 9`} />
          {this.props.results === true ? <Results /> : ""}
          {this.props.showStats === true ? <Stats /> : ""}
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

export default connect(mapStateToProps)(App);
