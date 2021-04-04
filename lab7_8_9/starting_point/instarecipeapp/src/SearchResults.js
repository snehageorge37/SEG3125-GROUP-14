import React from "react";
import Card from "react-bootstrap/Card";
import banana_smoothie from "./images/banana_smoothie.PNG";

const divBorderStyle = {
  border: "2px solid rgba(0, 0, 0, 0.5)",
  marginTop: 30,
};
const rowdivStyle = {
  border: "1px solid black",
  marginLeft: 50,
};
const imgStyle = {
  border: "1px solid #ddd",
  borderRadius: "4px",
  padding: "5px",
  width: "200px",
};
const pStyle = {
  textAlign: "center",
};

function SearchResults() {
  return (
    <div className="searchResults" style={divBorderStyle}>
      <h3 style={{ marginTop: 30 }}>Results</h3>
      <recipe_result_card />
    </div>
  );
}

export default SearchResults;
