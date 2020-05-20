import React, { Component } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { connect } from "react-redux";
import MDBNavbar from "./navbar";
import HomePage from './homepage';
import Movies from './movies';
import Shows from './shows'
import Landing from './Home/Landing'
import Search from './search';
import{ Redirect ,Route} from 'react-router-dom'
import MovieInfoPage from "../components/Home/MovieInfoPage"
import SeriesInfo from "../components/Home/SeriesInfo";

class Home extends Component {
  render() {
    return (
      <div>
        {/* <HomePage/> */}
        <Switch>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/home" component={HomePage}/>
          <Route exact path="/movies" component={Movies}/>
          <Route exact path="/shows" component={Shows}/>
          <Route exact path="/movies/:id" component={MovieInfoPage}/>
          <Route exact path="/shows/:id" component={SeriesInfo}/>
          <Route exact path="/search" component={Search}/>
          </Switch>
      </div>
    );
  }
}

const stateMapper = state => {
  return state;
};

export default connect(stateMapper)(Home);
