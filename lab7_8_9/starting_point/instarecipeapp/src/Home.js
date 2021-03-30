import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Ingredients from "./Ingredients";
import { Link, withRouter } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="home center">
        <br />
        <br />
        <img
          alt="homePage image"
          src="/homepage.jpeg"
          className="homepage-image"
        />
        <br />
        <br />
        <Router>
          <Link class="nav-link" to="/ingredients" className="btn btn-primary">
            Find Recipes
          </Link>
          <Switch>
            <Route path="/ingredients">
              <Ingredients />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Home;
