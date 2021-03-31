import React from "react";
import banana_smoothie from "./images/banana_smoothie.PNG";

const divBorderStyle = {
        border: '2px solid rgba(0, 0, 0, 0.5)',
        marginTop: 30,
};
const rowdivStyle = {
  border:"1px solid black",
  marginLeft: 50,
};
const imgStyle = {
        border: "1px solid #ddd",
        borderRadius: "4px",
        padding: "5px",
        width: "200px"
};
const pStyle = {
  textAlign: "center",
};


function SearchResults() {
  return (
    <div className="searchResults" style={divBorderStyle} >
        <h3 style={{marginTop: 30}}>Results</h3>
        <div class="row g-5 py-5">
            <div class="feature col-md-4" style={rowdivStyle}>
                <p style={pStyle}>Recipe result1 title</p>
                <br />
                <img src={banana_smoothie} alt="banana smoothie" style={imgStyle} />
                <br /><br /><br />
                <p align="right">Time to cook : 20 min</p>
            </div>
        </div>
    </div>
  );
}

export default SearchResults;
