import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import AccordionMP from "./Accordion";
import SearchResults from "./SearchResults";

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
const listAcc = [
  {
    title: "Meat",
    content: (
      <form action="#">
        <Label>
          <input type="checkbox" />
          <span style={{ paddingLeft: 25 }}>Beef</span>
        </Label>
        <Label style={{ marginLeft: 30 }}>
          <input type="checkbox" />
          <span style={{ paddingLeft: 25 }}>Chicken</span>
        </Label>
      </form>
    ),
  },
  {
    title: "Vegetables",
    content: (
      <form action="#">
        <label>
          <input type="checkbox" />
          <span style={{ paddingLeft: 25 }}>Onions</span>
        </label>
        <label style={{ marginLeft: 30 }}>
          <input type="checkbox" />
          <span style={{ paddingLeft: 25 }}>Carrots</span>
        </label>
        <label style={{ marginLeft: 30 }}>
          <input type="checkbox" />
          <span style={{ paddingLeft: 25 }}>Potatoes</span>
        </label>
        <label style={{ marginLeft: 30 }}>
          <input type="checkbox" />
          <span style={{ paddingLeft: 25 }}>Garlic</span>
        </label>
      </form>
    ),
  },
  {
    title: "Fruits",
    content: (
      <form action="#">
        <label>
          <input type="checkbox" />
          <span style={{ paddingLeft: 25 }}>Banana</span>
        </label>
        <label style={{ marginLeft: 30 }}>
          <input type="checkbox" />
          <span style={{ paddingLeft: 25 }}>Apple</span>
        </label>
        <label style={{ marginLeft: 30 }}>
          <input type="checkbox" />
          <span style={{ paddingLeft: 25 }}>Orange</span>
        </label>
        <label style={{ marginLeft: 30 }}>
          <input type="checkbox" />
          <span style={{ paddingLeft: 25 }}>Peaches</span>
        </label>
      </form>
    ),
  },
  {
    title: "Dairy",
    content: (
      <form action="#">
        <label>
          <input type="checkbox" />
          <span style={{ paddingLeft: 25 }}>Milk</span>
        </label>
        <label style={{ marginLeft: 30 }}>
          <input type="checkbox" />
          <span style={{ paddingLeft: 25 }}>Cheese</span>
        </label>
        <label style={{ marginLeft: 30 }}>
          <input type="checkbox" />
          <span style={{ paddingLeft: 25 }}>Butter</span>
        </label>
      </form>
    ),
  },
];

const Ingredients = () => {
  const [isChecked, setChecked] = useState(true);
  const handleChange = () => {
    setChecked((prevState) => !prevState);
  };

  return (
    <Container>
      <div style={divBorderStyle}>
        <br />
        <br />
        <h3 style={{ textAlignVertical: "center", textAlign: "center" }}>
          Select Ingredients
        </h3>
        <br />
        <h5 style={{ textAlignVertical: "center", textAlign: "center" }}>
          Please check all the ingredients you wish to use today !
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
            Search
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
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Ingredients />, rootElement);
export default Ingredients;
