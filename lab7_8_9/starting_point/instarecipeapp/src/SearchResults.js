import React from "react";
import Card from "react-bootstrap/Card";
import banana_smoothie from "./images/banana_smoothie.PNG";
import Button from "react-bootstrap/Button";


let content = {
  English: {
    recipes: {
        chiken_marinade: {
            title: "Chiken Marinade",
            ingredients: ["i1", "i2", "i3"],
            steps: ["step1", "step2", "step3", "step4"],
            Prep: "15 mins",
            Cook: "16 mins",
            Total: "4 hrs 30 mins",
            Servings: "4",
            Yield: "4 servings",
            Nutrition_info: "Per Serving: 549 calories; protein 27.5g; carbohydrates 7g; fat 46.1g; cholesterol 67.2mg; sodium 1573.9mg."
        },
        teriyaki_chiken: {
          title: "Teriyaki Chiken",
          ingredients: ["i1", "i2", "i3"],
          steps: ["step1", "step2", "step3", "step4"],
          Prep: "-",
          Cook: "-",
          Total: "-",
          Servings: "6",
          Yield: "6 servings",
          Nutrition_info: "Per Serving: 604 calories; protein 44.3g; carbohydrates 27.9g; fat 34.2g; cholesterol 170.3mg; sodium 1963mg."
        },
        grilled_tuna: {
          title: "Grilled Tuna",
          ingredients: ["i1", "i2", "i3"],
          steps: ["step1", "step2", "step3", "step4"],
          Prep: "10 mins",
          Cook: "6 mins",
          Total: "1 hr 16 mins",
          Servings: "4",
          Yield: "4 servings",
          Nutrition_info: "Per Serving: 281 calories; protein 40g; carbohydrates 1.8g; fat 11.8g; cholesterol 77.1mg; sodium 644.2mg."
        },
        oven_fried_salmon: {
          title: "Oven-Fried Salmon",
          ingredients: ["i1", "i2", "i3"],
          steps: ["step1", "step2", "step3", "step4"],
          Prep: "10 mins",
          Cook: "10 mins",
          Total: "25 mins",
          Servings: "6",
          Yield: "6 servings",
          Nutrition_info: "Per Serving: 405 calories; protein 31.2g; carbohydrates 13.7g; fat 24.2g; cholesterol 80.3mg; sodium 694.7mg."
        },
        beef_stew: {
          title: "Beef Stew",
          ingredients: ["i1", "i2", "i3"],
          steps: ["step1", "step2", "step3", "step4"],
          Prep: "20 mins",
          Cook: "1 hr 10 mins",
          Total: "1 hr 30 mins",
          Servings: "8",
          Yield: "8 servings",
          Nutrition_info: "Per Serving: 403 calories; protein 24.4g; carbohydrates 27.7g; fat 21.5g; cholesterol 62.6mg; sodium 238.3mg."
        },
        roasted_garlic: {
          title: "Roasted Garlic",
          ingredients: ["i1", "i2", "i3"],
          steps: ["step1", "step2", "step3", "step4"],
          Prep: "5 mins",
          Cook: "1 hr",
          Total: "1 hr 5 mins",
          Servings: "15",
          Yield: "15 servings",
          Nutrition_info: "Per Serving: 80 calories; protein 2.4g; carbohydrates 12.3g; fat 2.9g; sodium 6.4mg."
        },
        stuffed_potatoes: {
          title: "Stuffed Potatoes",
          ingredients: ["i1", "i2", "i3"],
          steps: ["step1", "step2", "step3", "step4"],
          Prep: "15 mins",
          Cook: "1 hr 30 mins",
          Total: "1 hr 45 mins",
          Servings: "4",
          Yield: "4 servings",
          Nutrition_info: "Per Serving: 512 calories; protein 21.7g; carbohydrates 63.6g; fat 20g; cholesterol 62.7mg; sodium 416.5mg. "
        },
        oven_roasted_potatoes: {
          title: "Oven-Roasted Potatoes",
          ingredients: ["i1", "i2", "i3"],
          steps: ["step1", "step2", "step3", "step4"],
          Prep: "10 mins",
          Cook: "1 hr",
          Total: "1 hr 10 mins",
          Servings: "6",
          Yield: "6 servings",
          Nutrition_info: "Per Serving: 206 calories; protein 4.4g; carbohydrates 37.6g; fat 4.7g; sodium 553.5mg."
        },
        oven_roasted_grapetomatoes: {
          title: "Oven Roasted Grape Tomatoes",
          ingredients: ["i1", "i2", "i3"],
          steps: ["step1", "step2", "step3", "step4"],
          Prep: "15 mins",
          Cook: "30 mins",
          Total: "45 mins",
          Servings: "2",
          Yield: "2 servings",
          Nutrition_info: "Per Serving: 113 calories; protein 2.2g; carbohydrates 11.7g; fat 7.5g; sodium 98.7mg."
        },
        tomatoe_mozzarella_salad: {
          title: "Tomatoe Mozzarella Salad",
          ingredients: ["i1", "i2", "i3"],
          steps: ["step1", "step2", "step3", "step4"],
          Prep: "10 mins",
          Cook: "10 mins",
          Total: "20 mins",
          Servings: "6",
          Yield: "6 servings",
          Nutrition_info: "Per Serving: 199 calories; protein 10.1g; carbohydrates 6.2g; fat 15.2g; cholesterol 24.2mg; sodium 338.3mg."
        },
        french_strawberry_cake: {
          title: "French Strawberry Cake",
          ingredients: ["i1", "i2", "i3"],
          steps: ["step1", "step2", "step3", "step4"],
          Prep: "20 mins",
          Cook: "40 mins",
          Total: "1 hr",
          Servings: "10",
          Yield: "1 8-inch round cake pan",
          Nutrition_info: "Per Serving: 294 calories; protein 3.7g; carbohydrates 42g; fat 12.9g; cholesterol 66.6mg; sodium 141.3mg."
        },
        cookie_butter_cookies: {
          title: "Cookie Butter Cookies",
          ingredients: ["i1", "i2", "i3"],
          steps: ["step1", "step2", "step3", "step4"],
          Prep: "15 mins",
          Cook: "12 mins",
          Total: "27 mins",
          Servings: "25",
          Yield: "25 cookies",
          Nutrition_info: "Per Serving: 196 calories; protein 2.6g; carbohydrates 24g; fat 10.2g; cholesterol 22.1mg; sodium 125.3mg."
        },
        grilled_cheese_sandwitch: {
          title: "Grilled Cheese Sandwitch",
          ingredients: ["i1", "i2", "i3"],
          steps: ["step1", "step2", "step3", "step4"],
          Prep: "5 mins",
          Cook: "4 mins",
          Total: "9 mins",
          Servings: "1",
          Yield: "1 sandwitch",
          Nutrition_info: "Per Serving: 543 calories; protein 17.9g; carbohydrates 27.8g; fat 40.6g; cholesterol 98mg; sodium 745.6mg. "
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
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={banana_smoothie} />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
                Recipe card description
            </Card.Text>
            <Button variant="primary">Recipe card button</Button>
        </Card.Body>
    </Card>
    </div>
  );
}

export default SearchResults;
