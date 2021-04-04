import React from "react";
import banana_smoothie from "./images/banana_smoothie.PNG";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import styled from "styled-components";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";

let content = {
  English: {
    recipes: {
        chiken_marinade: {
            title: "Chiken Marinade",
            ingredients: ["i1", "i2", "i3"],
            steps: ["step1", "step2", "step3", "step4"]
        },
        teriyaki_chiken: {
          title: "Teriyaki Chiken",
          ingredients: ["i1", "i2", "i3"],
          steps: ["step1", "step2", "step3", "step4"]
        },
        grilled_tuna: {
          title: "Grilled Tuna",
          ingredients: ["i1", "i2", "i3"],
          steps: ["step1", "step2", "step3", "step4"]
        },
        oven_fried_salmon: {
          title: "Oven-Fried Salmon",
          ingredients: ["i1", "i2", "i3"],
          steps: ["step1", "step2", "step3", "step4"]
        },
        beef_stew: {
          title: "Beef Stew",
          ingredients: ["i1", "i2", "i3"],
          steps: ["step1", "step2", "step3", "step4"]
        },
        roasted_garlic: {
          title: "Roasted Garlic",
          ingredients: ["i1", "i2", "i3"],
          steps: ["step1", "step2", "step3", "step4"]
        },
        stuffed_potatoes: {
          title: "Stuffed Potatoes",
          ingredients: ["i1", "i2", "i3"],
          steps: ["step1", "step2", "step3", "step4"]
        },
        oven_roasted_potatoes: {
          title: "Oven-Roasted Potatoes",
          ingredients: ["i1", "i2", "i3"],
          steps: ["step1", "step2", "step3", "step4"]
        },
        oven_roasted_grapetomatoes: {
          title: "Oven Roasted Grape Tomatoes",
          ingredients: ["i1", "i2", "i3"],
          steps: ["step1", "step2", "step3", "step4"]
        },
        tomatoe_mozzarella_salad: {
          title: "Tomatoe Mozzarella Salad",
          ingredients: ["i1", "i2", "i3"],
          steps: ["step1", "step2", "step3", "step4"]
        },
        french_strawberry_cake: {
          title: "French Strawberry Cake",
          ingredients: ["i1", "i2", "i3"],
          steps: ["step1", "step2", "step3", "step4"]
        },
        apple_muffins: {
          title: "Apple Muffins",
          ingredients: ["i1", "i2", "i3"],
          steps: ["step1", "step2", "step3", "step4"]
        },
        cookie_butter_cookies: {
          title: "Cookie Butter Cookies",
          ingredients: ["i1", "i2", "i3"],
          steps: ["step1", "step2", "step3", "step4"]
        },
        grilled_cheese_sandwitch: {
          title: "Grilled Cheese Sandwitch",
          ingredients: ["i1", "i2", "i3"],
          steps: ["step1", "step2", "step3", "step4"]
        }
    }
  },
  French: {
    recipes: {
      chiken_marinade: {
          title: "Marinade au Poulet",
          ingredients: ["i1", "i2", "i3"],
          steps: ["step1", "step2", "step3", "step4"]
      },
      teriyaki_chiken: {
        title: "Poulet teriyaki",
        ingredients: ["i1", "i2", "i3"],
        steps: ["step1", "step2", "step3", "step4"]
      },
      grilled_tuna: {
        title: "Thon grillé",
        ingredients: ["i1", "i2", "i3"],
        steps: ["step1", "step2", "step3", "step4"]
      },
      oven_fried_salmon: {
        title: "Saumon frit au four",
        ingredients: ["i1", "i2", "i3"],
        steps: ["step1", "step2", "step3", "step4"]
      },
      beef_stew: {
        title: "Ragoût de bœuf",
        ingredients: ["i1", "i2", "i3"],
        steps: ["step1", "step2", "step3", "step4"]
      },
      roasted_garlic: {
        title: "ail rôti",
        ingredients: ["i1", "i2", "i3"],
        steps: ["step1", "step2", "step3", "step4"]
      },
      stuffed_potatoes: {
        title: "Pommes de terre farcies",
        ingredients: ["i1", "i2", "i3"],
        steps: ["step1", "step2", "step3", "step4"]
      },
      oven_roasted_potatoes: {
        title: "Pommes de terre rôties au four",
        ingredients: ["i1", "i2", "i3"],
        steps: ["step1", "step2", "step3", "step4"]
      },
      oven_roasted_grapetomatoes: {
        title: "Tomates raisins rôties au four",
        ingredients: ["i1", "i2", "i3"],
        steps: ["step1", "step2", "step3", "step4"]
      },
      tomatoe_mozzarella_salad: {
        title: "Salade de tomates et mozzarella",
        ingredients: ["i1", "i2", "i3"],
        steps: ["step1", "step2", "step3", "step4"]
      },
      french_strawberry_cake: {
        title: "Gâteau aux fraises à la française",
        ingredients: ["i1", "i2", "i3"],
        steps: ["step1", "step2", "step3", "step4"]
      },
      apple_muffins: {
        title: "Muffins à la pomme",
        ingredients: ["i1", "i2", "i3"],
        steps: ["step1", "step2", "step3", "step4"]
      },
      cookie_butter_cookies: {
        title: "Biscuits au beurre",
        ingredients: ["i1", "i2", "i3"],
        steps: ["step1", "step2", "step3", "step4"]
      },
      grilled_cheese_sandwitch: {
        title: "Sandwitch au fromage grillé",
        ingredients: ["i1", "i2", "i3"],
        steps: ["step1", "step2", "step3", "step4"]
      }
    }
  }
};

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

function Recipes() {
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
          <Card style={{ width: "10rem" }}>
            <ListGroup variant="flush">
              <ListGroup.Item>Prep:</ListGroup.Item>
              <ListGroup.Item>Cook:</ListGroup.Item>
              <ListGroup.Item>Total:</ListGroup.Item>
              <ListGroup.Item>Servings:</ListGroup.Item>
              <ListGroup.Item>Yield:</ListGroup.Item>
            </ListGroup>
          </Card>
          <Accordion>
            <Card style={{ width: "20rem" }}>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  Nutrition Info
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

export default Recipes;
