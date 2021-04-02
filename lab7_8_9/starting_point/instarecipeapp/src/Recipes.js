import React, { Component } from "react";
import banana_smoothie from "./images/banana_smoothie.PNG";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import styled from "styled-components";

const breadcrumb = {
  color: "black",
  background: "#ebd9c6",
};
const Container = styled.div`
  font-family: sans-serif;
  padding: 1vh 5vw;
`;
const imgStyle = {
  border: "1px solid #ddd",
  borderRadius: "4px",
  padding: "5px",
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  width: "50%",
};
const pStyle = {
  textAlign: "center",
  border: "2px solid rgba(0, 0, 0, 0.5)",
};
const divBorderStyle = {
  border: "2px solid rgba(0, 0, 0, 0.5)",
  marginTop: 30,
};

class Recipes extends Component {
  render() {
    return (
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item href="/" style={breadcrumb}>
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item href="/ingredients" style={breadcrumb}>
            Ingredients
          </Breadcrumb.Item>
          <Breadcrumb.Item active style={breadcrumb}>
            Recipe Name Here
          </Breadcrumb.Item>
        </Breadcrumb>
        <div class="container" style={divBorderStyle}>
          <br />
          <br />
          <br />
          <div class="row mb-2">
            <div class="col-md-6">
              <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div class="col p-4 d-flex flex-column position-static">
                  <h4 class="mb-0" style={pStyle}>
                    Banana Smoothie
                  </h4>
                  <br />
                  <br />
                  <img
                    src={banana_smoothie}
                    alt="banana smoothie"
                    style={imgStyle}
                  />
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div class="col p-4 d-flex flex-column position-static">
                  <h4 class="mb-0" style={pStyle}>
                    Nutrition facts
                  </h4>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                </div>
              </div>
            </div>
          </div>

          <div class="row mb-2">
            <div class="col-md-6">
              <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div class="col p-4 d-flex flex-column position-static">
                  <h4 class="mb-0" style={pStyle}>
                    Ingredients
                  </h4>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div class="col p-4 d-flex flex-column position-static">
                  <h4 class="mb-0" style={pStyle}>
                    Instructions
                  </h4>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default Recipes;