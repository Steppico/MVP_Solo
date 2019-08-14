import React, { Component } from "react";
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
          style={"mapbox://styles/mapbox/light-v10"}
          containerStyle={{
            height: "500px",
            width: "1200px",
            margin: "5px",
            borderRadius: "10px",
            border: "1px solid rgb(0,0,0)"
          }}
          center={this.props.centerMap}
          zoom={this.props.zoom}
        >
          <ZoomControl />
          {this.props.prevLaunches
            ? this.props.prevLaunches.map(marker => {
                return (
                  <Marker
                    coordinates={[marker.pad.longitude, marker.pad.latitude]}
                    anchor="bottom"
                    key={marker.id}
                    onClick={() => {
                      this.props.magnetify([
                        marker.pad.longitude,
                        marker.pad.latitude
                      ]);
                    }}
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

const mapDispatchToProps = dispatch => {
  return {
    magnetify: coord => {
      dispatch({
        type: "UPDATE_VIEW",
        coord
      });
    }
  };
};

const mapStateToProps = state => {
  return { ...state };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpaceMap);
