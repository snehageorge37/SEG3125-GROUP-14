import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link, withRouter } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div className="navigation">
        <nav class="navbar navbar-expand navbar-light bg-light">
          <div class="container">
            <div>
              <Navbar bg="light" variant="light" expand="lg" sticky="top">
                <Router>
                  <Link class="nav-link" to="/home">
                    <img
                      alt="InstaRecipe logo"
                      src="/logo.png"
                      width="135"
                      height="60"
                      className="d-inline-block align-top"
                    />{" "}
                  </Link>
                  <Link class="nav-link" to="/home">
                    <Navbar.Brand>InstaRecipe</Navbar.Brand>
                  </Link>
                  <Switch>
                    <Route path="/home"></Route>
                  </Switch>
                </Router>
              </Navbar>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
