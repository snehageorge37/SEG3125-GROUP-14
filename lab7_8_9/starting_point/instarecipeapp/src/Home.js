import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styled from "styled-components";
import Breadcrumb from "react-bootstrap/Breadcrumb";

const breadcrumb = {
  color: "black",
  background: "#ebd9c6",
};

const Container = styled.div`
  font-family: sans-serif;
  padding: 1vh 5vw;
`;

class Home extends Component {
  render() {
    return (
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item href="/" style={breadcrumb}>
            Home
          </Breadcrumb.Item>
        </Breadcrumb>
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
      </Container>
    );
  }
}

export default Home;
