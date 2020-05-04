import React from "react";
import { connect } from "react-redux";
import { Container, Col, Row } from "react-bootstrap";
import APSlider from './slider/slider'

class Landing extends React.Component {
  render() {
    return (
      <Container fluid>
      <APSlider/>
      </Container>
    );
  }
}

const stateMapper = state => {
  return state;
};

export default connect(stateMapper)(Landing);
