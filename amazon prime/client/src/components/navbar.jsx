import React, { Component } from "react";
import { Navbar } from "react-bootstrap";

class APNavbar extends Component {
  render() {
    return (
      <Navbar expand="lg"
        className="bg-dark mb-3"
      >
        <Navbar.Brand href="/" className="text-white table">
        AMAZON PRIME
        </Navbar.Brand>
      </Navbar>
    );
  }
}

export default APNavbar;
