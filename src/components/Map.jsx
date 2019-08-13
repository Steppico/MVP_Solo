import React, { Component } from "react";
import { getData } from "../getData";
import { connect } from "react-redux";
import ReactMapboxGl, { ZoomControl, Marker } from "react-mapbox-gl";
import "../styles/App.css";
const gmap_marker = require("../icons/gmap_marker.svg");

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1Ijoic3RlcHBpY28iLCJhIjoiY2p6OTZjdjB5MDBqbDNibXI2bTVoMTd4YiJ9.-DsqgMkwU4qEbUf74BJTvw"
});

class SpaceMap extends Component {
  render() {
    return (
      <div className="Map__block">
        <Map
          style={"mapbox://styles/mapbox/streets-v10"}
          containerStyle={{
            height: "500px",
            width: "1200px",
            margin: "5px",
            borderRadius: "10px",
            border: "1px solid rgb(0,0,0)"
          }}
          center={[137.2529, 38.7048]}
          zoom={[4.2]}
        >
          <ZoomControl />
          {this.props.prevLaunches
            ? this.props.prevLaunches.map(marker => {
                return (
                  <Marker
                    coordinates={[marker.pad.longitude, marker.pad.latitude]}
                    anchor="bottom"
                    key={marker.id}
                  >
                    <img src={gmap_marker} alt={marker.name} />
                  </Marker>
                );
              })
            : ""}
        </Map>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {};

const mapStateToProps = state => {
  return { ...state };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpaceMap);
