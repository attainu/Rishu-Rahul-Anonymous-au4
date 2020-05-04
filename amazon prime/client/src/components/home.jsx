import React, { Component } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { connect } from "react-redux";
import APNavbar from "./navbar";
import Landing from './landing';
import MultipleItems from './slider/mul'
import NewCom from './xyz';

import{ Redirect ,Route} from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div style={{height : "100%"}} className="bg-dark" >
        <BrowserRouter>
        <APNavbar />
        <Landing/>
        <MultipleItems/>
        <NewCom/>
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
