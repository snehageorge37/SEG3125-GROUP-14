import React from "react";
import banana_smoothie from "./images/banana_smoothie.PNG";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import styled from "styled-components";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";

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

function Recipes(props) {
  let content = {
    English: {
      breadcrumb_home: "Home",
      breadcrumb_ingr: "Ingredients",
      prep: "Prep: ",
      cook: "Cook: ",
      total: "Total: ",
      servings: "Servings:",
      yield: "Yield: ",
      nutrition_info_button: "Nutrition Info",
      ingredients: "Ingredients",
      instructions: "Instructions",
    },
    Français: {
      breadcrumb_home: "Page d'accueil",
      breadcrumb_ingr: "Ingrédients",
      prep: "Préparation: ",
      cook: "Temps de cuisson: ",
      total: "Temps total: ",
      servings: "Portions:",
      yield: "Rendement: ",
      nutrition_info_button: "Info. nutritionnelle",
      ingredients: "Ingrédients",
      instructions: "Instructions",
    },
  };
  props.language === "Français"
    ? (content = content.Français)
    : (content = content.English);
  return (
    <Container>
      <Breadcrumb>
        <Breadcrumb.Item href="/" style={breadcrumb}>
          {content.breadcrumb_home}
        </Breadcrumb.Item>
        <Breadcrumb.Item href="/ingredients" style={breadcrumb}>
          {content.breadcrumb_ingr}
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
          <Card style={{ width: "13rem" }}>
            <ListGroup variant="flush">
              <ListGroup.Item>{content.prep}</ListGroup.Item>
              <ListGroup.Item>{content.cook}</ListGroup.Item>
              <ListGroup.Item>{content.total}</ListGroup.Item>
              <ListGroup.Item>{content.servings}</ListGroup.Item>
              <ListGroup.Item>{content.yield}</ListGroup.Item>
            </ListGroup>
          </Card>
          <Accordion>
            <Card style={{ width: "18rem" }}>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  {content.nutrition_info_button}
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  Per Serving: 236 calories; protein 13.8g; carbohydrates 27.6g;
                  fat 9.1g; cholesterol 147.1mg; sodium 316.4mg
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>

        <div class="row mb-2">
          <div class="col-md-6">
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div class="col p-4 d-flex flex-column position-static">
                <h4 class="mb-0" style={pStyle}>
                  {content.ingredients}
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
                  {content.instructions}
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

export default Recipes;
