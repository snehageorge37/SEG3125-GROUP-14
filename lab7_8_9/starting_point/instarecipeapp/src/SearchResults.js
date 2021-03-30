import React from "react";

const divBorderStyle = {
        border: '2px solid rgba(0, 0, 0, 0.5)',
        marginTop: 30,
};

function SearchResults() {
  return (
    <div className="searchResults" style={divBorderStyle} >
        <h3 style={{marginTop: 30}}>Results</h3>
        <p> TO DO : ADD RECIPES CARDS HERE</p>
    </div>
  );
}

export default SearchResults;
