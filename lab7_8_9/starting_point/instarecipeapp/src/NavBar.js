import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Card from "react-bootstrap/Card";

class NavBar extends Component {
  render() {
    return (
      <div className="navigation">
        <nav class="navbar navbar-expand navbar-light bg-light">
          <div class="container">
            <div>
              <Navbar bg="light" variant="light" expand="lg" sticky="top">
                <Card.Link href="/">
                  <img
                    alt="InstaRecipe logo"
                    src="/logo.png"
                    width="135"
                    height="60"
                    className="d-inline-block align-top"
                  />{" "}
                </Card.Link>
                <Card.Link href="/">
                  <Navbar.Brand>InstaRecipe</Navbar.Brand>
                </Card.Link>
              </Navbar>
            </div>
          </div>
          <div className="language-select">
            <select
              className="custom-select"
              value={this.props.language}
              onChange={(e) => this.props.handleSetLanguage(e.target.value)}
            >
              <option value="English">English</option>
              <option value="Français">Français</option>
            </select>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
