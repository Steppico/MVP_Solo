import React, { Component } from "react";
import { getData } from "../getData";
import { connect } from "react-redux";
import ReactMapboxGl, { ZoomControl, Marker, Layer, Feature } from "react-mapbox-gl";
import "../App.css";
const gmap_marker = require("../icons/gmap_marker.svg");


const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1Ijoic3RlcHBpY28iLCJhIjoiY2p6OTZjdjB5MDBqbDNibXI2bTVoMTd4YiJ9.-DsqgMkwU4qEbUf74BJTvw"
});

class SpaceMap extends Component {
  async componentDidMount() {
    this.props.launchData();
  }
  render() {
    return (
        <>
          <Map
            style={"mapbox://styles/mapbox/streets-v10"}
            containerStyle={{
              height: "500px",
              width: "800px",
              margin: "5px",
              borderRadius: "10px",
              border: "1px solid rgb(0,0,0)"
            }}
            center={[137.2529, 38.7048]}
            zoom={[4.2]}
          >
            <ZoomControl />
            {this.props.prevLaunches ? this.props.prevLaunches.map((marker) => {
        return (
          <Marker
          coordinates={[marker.pad.longitude, marker.pad.latitude]}
          anchor="bottom"
          key={marker.id}>
              <img src={gmap_marker} alt={marker.name}/>
          </Marker>
        )    
      }): ""}
          </Map>
          <button
            onClick={() => {
              this.props.getMarkers(this.props.prevLaunches);
            }}
          >
            Show launches
          </button>
        </>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    launchData: async () => {
      await getData().then(res =>
        dispatch({
          type: "SET_STATE",
          action: res
        })
      );
    },
  }
};

const mapStateToProps = state => {
  return { ...state };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpaceMap);
