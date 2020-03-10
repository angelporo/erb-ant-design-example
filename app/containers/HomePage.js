// @flow
import React, {Component} from "react";
import {bindActionCreators} from "redux";
import Home from "../components/Home";
import {connect} from "react-redux";
import * as CounterActions from "../actions/counter";

class HomePage extends Component {
  render() {
    return <Home />;
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
