import React, { Component } from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import Ingredients from "./Ingredients";

class Recipes extends Component {
    render() {
      return (
        <div class="container">
        <br />
        <br />
        <br />
        <div class="row mb-2">
          <div class="col-md-6">
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div class="col p-4 d-flex flex-column position-static">
                <h3 class="mb-0">Recipe title</h3>
              </div>
              <div class="col-auto d-none d-lg-block">
                <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Recipe Image" preserveAspectRatio="xMidYMid slice" focusable="false">
                  <title>Recipe Image</title>
                  <rect width="100%" height="100%" fill="#55595c"></rect>
                  <text x="30%" y="50%" fill="#eceeef" dy=".3em">Recipe Image</text>
                </svg>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div class="col p-4 d-flex flex-column position-static">
                <h3 class="mb-0">Nutrition facts</h3>
              </div>
            </div>
          </div>
        </div>
        </div>
      );
    }
  }
  
  export default Recipes;