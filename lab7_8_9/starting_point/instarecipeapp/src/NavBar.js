import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";

class NavBar extends Component {
  render() {
    return (
      <Navbar bg="light" variant="light" expand="lg" sticky="top">
        <img
          alt="InstaRecipe logo"
          src="/logo.png"
          width="135"
          height="60"
          className="d-inline-block align-top"
        />{" "}
        <Navbar.Brand href="#home">InstaRecipe</Navbar.Brand>
      </Navbar>
    );
  }
}

export default NavBar;
