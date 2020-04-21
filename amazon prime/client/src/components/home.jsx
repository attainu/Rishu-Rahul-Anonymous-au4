import React, { Component } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { connect } from "react-redux";
import APNavbar from "./navbar";

import{ Redirect ,Route} from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <APNavbar />
        <Switch>
          <Route exact path="/">
          </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

const stateMapper = state => {
  return state;
};

export default connect(stateMapper)(Home);
