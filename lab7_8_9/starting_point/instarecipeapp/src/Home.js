import React, { Component } from "react";
import Button from 'react-bootstrap/Button'
import Card from "react-bootstrap/Card";

class Home extends Component {
  render() {
    return (
      <div className="home center">
        <br />
        <br />
        <img
          alt="a fancy plate of food"
          src="/homepage.jpeg"
          className="homepage-image"
        />
        <br />
        <br />
        <Card.Link href="/ingredients">
          <Button variant="primary">Find Recipes</Button>
        </Card.Link>
      </div>
    );
  }
}

export default Home;
