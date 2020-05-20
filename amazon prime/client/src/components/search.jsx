import React from "react";
import { connect } from "react-redux";
import { Container, Col, Row } from "react-bootstrap";
import APSlider from "./slider/slider";
import APSliderTwo from "./slider/slider2";
import APCarousel from "./slider/carousel";
import { search, setSearchItem } from "../actions/searchActions";
import queryString from "query-string";

class Search extends React.Component {
  async componentDidMount() {
    const value = queryString.parse(this.props.location.search);
    console.log("value", value.item);
    this.props.setSearchItem(value.item);
    this.props.search();
  }
  render() {
    return (
      <Container fluid>
        {this.props.searchResult && <APSlider contents={this.props.searchResult} />}
      </Container>
    );
  }
}

const stateMapper = (state) => {
  return {
    searchResult: state.search.searchResult,
    searchItem : state.search.searchItem
  };
};

export default connect(stateMapper, { search , setSearchItem })(Search);
