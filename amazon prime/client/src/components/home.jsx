import React, { Component } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { connect } from "react-redux";
import MDBNavbar from "./navbar";
import HomePage from './homepage';
import Movies from './movies';
import Shows from './shows'
import Landing from './Home/Landing'
import{ Redirect ,Route} from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div style={{height : "%" }} className="" >
        <MDBNavbar />
        {/* <HomePage/> */}
        <Switch>
        <Route exact path="/" component={Landing}/>
          <Route exact path="/home" component={HomePage}/>
          <Route exact path="/movies" component={Movies}/>
          <Route exact path="/shows" component={Shows}/>
          </Switch>
      </div>
    );
  }
}

const stateMapper = state => {
  return state;
};

export default connect(stateMapper)(Home);
