import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import AccordionMP from "./Accordion";
import SearchResults from "./SearchResults";
import Breadcrumb from "react-bootstrap/Breadcrumb";

const breadcrumb = {
  color: "black",
  background: "#ebd9c6",
};
const Container = styled.div`
  font-family: sans-serif;
  padding: 1vh 5vw;
`;

const Label = styled.label`
  margin-bottom: 1rem;
  display: inline-block;
`;

const divBorderStyle = {
  border: "2px solid rgba(0, 0, 0, 0.5)",
  marginTop: 30,
};

const CheckAllowM = styled.input``;

function Ingredients(props) {
  let content = {
    English: {
      title: "Select Ingredients",
      description: "Please check all the ingredients you wish to use today!",
      breadcrumb_home: "Home",
      breadcrumb_ingr: "Ingredients",
      search_button: "SEARCH",
      ingredient_list_categories: ["Meat", "Vegetables", "Fruits", "Dairy"],
      ingredients_list: {
        meat: ["Chicken", "Tuna", "Salmon", "Beef"],
        vegetables: ["Potato", "Garlic", "Tomato"],
        fruits: ["Apple", "Strawberry"],
        dairy: ["Butter", "Cheese"],
      },
    },
    Français: {
      title: "Séléctionnez les ingrédients",
      description:
        "S.V.P cochez la case pour tous les ingrédients que vous désirez utiliser aujourd'hui !",
      breadcrumb_home: "Page d'accueil",
      breadcrumb_ingr: "Ingrédients",
      search_button: "CHERCHER",
      ingredient_list_categories: ["Viande", "Légumes", "Fruits", "Laitier"],
      ingredients_list: {
        meat: ["Poulet", "Thon", "Saumon", "Boeuf"],
        vegetables: ["Pommes de Terre", "Ail", "Tomate"],
        fruits: ["Pommes", "Fraises"],
        dairy: ["Beurre", "Fromage"],
      },
    },
  };
  props.language === "Français"
    ? (content = content.Français)
    : (content = content.English);
  let listAcc = [
    {
      title: <h4>{content.ingredient_list_categories[0]}</h4>,
      content: (
        <form action="#">
          <Label>
            <input type="checkbox" />
            <span style={{ paddingLeft: 25 }}>
              {content.ingredients_list.meat[0]}
            </span>
          </Label>
          <Label style={{ marginLeft: 30 }}>
            <input type="checkbox" />
            <span style={{ paddingLeft: 25 }}>
              {content.ingredients_list.meat[1]}
            </span>
          </Label>
          <Label style={{ marginLeft: 30 }}>
            <input type="checkbox" />
            <span style={{ paddingLeft: 25 }}>
              {content.ingredients_list.meat[2]}
            </span>
          </Label>
          <Label style={{ marginLeft: 30 }}>
            <input type="checkbox" />
            <span style={{ paddingLeft: 25 }}>
              {content.ingredients_list.meat[3]}
            </span>
          </Label>
        </form>
      ),
    },
    {
      title: <h4>{content.ingredient_list_categories[1]}</h4>,
      content: (
        <form action="#">
          <label>
            <input type="checkbox" />
            <span style={{ paddingLeft: 25 }}>
              {content.ingredients_list.vegetables[0]}
            </span>
          </label>
          <label style={{ marginLeft: 30 }}>
            <input type="checkbox" />
            <span style={{ paddingLeft: 25 }}>
              {content.ingredients_list.vegetables[1]}
            </span>
          </label>
          <label style={{ marginLeft: 30 }}>
            <input type="checkbox" />
            <span style={{ paddingLeft: 25 }}>
              {content.ingredients_list.vegetables[2]}
            </span>
          </label>
        </form>
      ),
    },
    {
      title: <h4>{content.ingredient_list_categories[2]}</h4>,
      content: (
        <form action="#">
          <label>
            <input type="checkbox" />
            <span style={{ paddingLeft: 25 }}>
              {content.ingredients_list.fruits[0]}
            </span>
          </label>
          <label style={{ marginLeft: 30 }}>
            <input type="checkbox" />
            <span style={{ paddingLeft: 25 }}>
              {content.ingredients_list.fruits[1]}
            </span>
          </label>
        </form>
      ),
    },
    {
      title: <h4>{content.ingredient_list_categories[3]}</h4>,
      content: (
        <form action="#">
          <label>
            <input type="checkbox" />
            <span style={{ paddingLeft: 25 }}>
              {content.ingredients_list.dairy[0]}
            </span>
          </label>
          <label style={{ marginLeft: 30 }}>
            <input type="checkbox" />
            <span style={{ paddingLeft: 25 }}>
              {content.ingredients_list.dairy[1]}
            </span>
          </label>
        </form>
      ),
    },
  ];
  const [isChecked, setChecked] = useState(true);
  const handleChange = () => {
    setChecked((prevState) => !prevState);
  };

  return (
    <Container>
      <Breadcrumb>
        <Breadcrumb.Item href="/" style={breadcrumb}>
          {content.breadcrumb_home}
        </Breadcrumb.Item>
        <Breadcrumb.Item active style={breadcrumb}>
          {content.breadcrumb_ingr}
        </Breadcrumb.Item>
      </Breadcrumb>
      <div style={divBorderStyle}>
        <br />
        <br />
        <h3 style={{ textAlignVertical: "center", textAlign: "center" }}>
          {content.title}
        </h3>
        <br />
        <h5 style={{ textAlignVertical: "center", textAlign: "center" }}>
          {content.description}
        </h5>
        <br />
        <div class="row">
          <div class="col-lg-6 pl-5 pr-2">
            <div>
              <CheckAllowM
                type="checkbox"
                id="allowM"
                onChange={handleChange}
                checked={isChecked}
              />
              <AccordionMP
                list={listAcc.slice(0, 1)}
                allowMultiple={isChecked}
              />
            </div>
          </div>
          <div class="col-lg-6 pl-2 pr-5">
            <div>
              <CheckAllowM
                type="checkbox"
                id="allowM"
                onChange={handleChange}
                checked={isChecked}
              />
              <AccordionMP
                list={listAcc.slice(1, 2)}
                allowMultiple={isChecked}
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6 pl-5 pr-2">
            <div>
              <CheckAllowM
                type="checkbox"
                id="allowM"
                onChange={handleChange}
                checked={isChecked}
              />
              <AccordionMP
                list={listAcc.slice(2, 3)}
                allowMultiple={isChecked}
              />
            </div>
          </div>
          <div class="col-lg-6 pl-2 pr-5">
            <div>
              <CheckAllowM
                type="checkbox"
                id="allowM"
                onChange={handleChange}
                checked={isChecked}
              />
              <AccordionMP
                list={listAcc.slice(3, 4)}
                allowMultiple={isChecked}
              />
            </div>
          </div>
        </div>
        <br />
      </div>
      <div
        style={{
          textAlignVertical: "center",
          textAlign: "center",
          marginTop: 35,
          marginBottom: 35,
        }}
      >
        <Router>
          <Link
            class="nav-link"
            to="/searchResults"
            className="btn btn-primary"
          >
            {content.search_button}
          </Link>
          <Switch>
            <Route path="/searchResults">
              <SearchResults />
            </Route>
          </Switch>
        </Router>
      </div>
    </Container>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Ingredients />, rootElement);
export default Ingredients;
