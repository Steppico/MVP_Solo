import React,{ Component } from "react";
import { connect } from "react-redux";
import Launches from "./Launches"

class InfoHome extends Component {
  render() {
    return (
      <>
      <Launches />
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    ...state
  }
}
const mapDispatchToProps = dispatch => {}

export default connect(mapStateToProps, mapDispatchToProps)(InfoHome)