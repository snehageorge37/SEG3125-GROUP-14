import React, { Component } from "react";
import Button from "react-bootstrap/Button";

class Home extends Component {
  render() {
    return (
      <div className="home center">
      <br /><br />
        <img alt="homePage image" src="/homepage.jpeg" className="homepage-image" />
        <br /><br />
        <Button type="submit" size="lg">
          Find Recipes
        </Button>{" "}
      </div>
    );
  }
}

export default Home;
