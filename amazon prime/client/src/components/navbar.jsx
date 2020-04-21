import React, { Component } from "react";
import { Navbar } from "react-bootstrap";

class APNavbar extends Component {
  render() {
    return (
      <Navbar expand="lg"
        className=""
      >
        <Navbar.Brand href="/" className="text-white table">
          SHAHI DHABHA
        </Navbar.Brand>
      </Navbar>
    );
  }
}

export default APNavbar;
