import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import AccordionMP from "./Accordion";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Card from "react-bootstrap/Card";
import cookie_butter_cookies from "./images/cookie_butter_cookies.PNG";

function ResultsSection(props) {
  let content = {
    English: {
      title: "Results",
      time_to_cook: "Time to Cook: ",
      recipes: {
        chicken_marinade: {
          title: "Chicken Marinade",
          image: "./images/chicken_marinade.PNG",
          ingredients: [
            "cup olive oil",
            "spicy brown mustard",
            "Chicken",
          ],
          steps: [
            "In a large bowl, mix the olive oil and mustard, and place chiken in the bowl",
            "Preheat the grill for high heat.",
            "Oil grill grate. Discard marinade, and place chicken on grate. Cook 6 to 8 minutes on each side, until juices run clear.",
          ],
          prep: "15 mins",
          cook: "16 mins",
          total: "4 hrs 30 mins",
          servings: "4",
          yield: "4 servings",
          Nutrition_info:
            "Per Serving: 549 calories; protein 27.5g; carbohydrates 7g; fat 46.1g; cholesterol 67.2mg; sodium 1573.9mg.",
        },
        teriyaki_chicken: {
          title: "Teriyaki Chicken",
          image: "./images/teriyaki_chicken.PNG",
          ingredients: [
            "Chicken",
            "sugar",
            "soy sauce",
            "2 cloves garlic, minced",
          ],
          steps: [
            "Rinse chicken halves, and pat dry with paper towels",
            "mix sugar, garlic and pour on chicken",
            "Bake chicken uncovered in the preheated oven for 1 hour",
          ],
          prep: "-",
          cook: "-",
          total: "-",
          servings: "6",
          yield: "6 servings",
          Nutrition_info:
            "Per Serving: 604 calories; protein 44.3g; carbohydrates 27.9g; fat 34.2g; cholesterol 170.3mg; sodium 1963mg.",
        },
        grilled_tuna: {
          title: "Grilled Tuna",
          image: "./images/grilled_tuna.PNG",
          ingredients: [
            "Tuna",
            "3 tablespoons extra virgin olive oil",
            "salt ",
            "1 lime, juiced",
          ],
          steps: [
            "Place tuna steaks and olive oil in a large resealable plastic bag. Seal, and refrigerate for 1 hour",
            "Preheat the grill for medium heat",
            " Season tuna with salt and pepper, and cook on the preheated grill approximately 6 minutes, turning once",
          ],
          prep: "10 mins",
          cook: "6 mins",
          total: "1 hr 16 mins",
          servings: "4",
          yield: "4 servings",
          Nutrition_info:
            "Per Serving: 281 calories; protein 40g; carbohydrates 1.8g; fat 11.8g; cholesterol 77.1mg; sodium 644.2mg.",
        },
        oven_fried_salmon: {
          title: "Oven-Fried Salmon",
          image: "./images/oven_fried_salmon.PNG",
          ingredients: ["garlic", "cheese", "Salmon"],
          steps: [
            "Preheat the oven to 500 degrees F ",
            "Coat salmon on all sides with olive oil mixture",
            "Bake in the preheated oven",
          ],
          prep: "10 mins",
          cook: "10 mins",
          total: "25 mins",
          servings: "6",
          yield: "6 servings",
          Nutrition_info:
            "Per Serving: 405 calories; protein 31.2g; carbohydrates 13.7g; fat 24.2g; cholesterol 80.3mg; sodium 694.7mg.",
        },
        beef_stew: {
          title: "Beef Stew",
          image: "./images/beef_stew.PNG",
          ingredients: [
            "vegetable oil",
            "garlic",
            "1 onion",
            "Beef",
            "1 can crushed tomatoes",
          ],
          steps: [
            "Heat oil in a large pot over medium-high heat. Add meat, flour, onion, and garlic",
            "Add broth, tomatoes and cook for about 1 hour",
          ],
          prep: "20 mins",
          cook: "1 hr 10 mins",
          total: "1 hr 30 mins",
          servings: "8",
          yield: "8 servings",
          Nutrition_info:
            "Per Serving: 403 calories; protein 24.4g; carbohydrates 27.7g; fat 21.5g; cholesterol 62.6mg; sodium 238.3mg.",
        },
        roasted_garlic: {
          title: "Roasted Garlic",
          image: "./images/roasted_garlic.PNG",
          ingredients: ["Garlic", "olive oil"],
          steps: [
            "Preheat oven to 400 degrees F (200 degrees C).",
            "Arrange heads of garlic on a baking sheet. Sprinkle garlic with olive oil. Bake for 40 minutes to 1 hour",
          ],
          prep: "5 mins",
          cook: "1 hr",
          total: "1 hr 5 mins",
          servings: "15",
          yield: "15 servings",
          Nutrition_info:
            "Per Serving: 80 calories; protein 2.4g; carbohydrates 12.3g; fat 2.9g; sodium 6.4mg.",
        },
        stuffed_potatoes: {
          title: "Stuffed Potatoes",
          image: "./images/stuffed_potatoes.PNG",
          ingredients: [
            "Potato",
            "cheddar cheese",
            "sour cream and onion dip",
          ],
          steps: [
            "Preheat oven to 350 degrees F",
            "Bake potatoes in preheated oven for 45 minutes",
            "Slice tops off of potatoes and scoop the flesh into a large bowl",
            "To the potato flesh add the cheese and dip. Mix well and spoon mixture into potato skins.",
          ],
          prep: "15 mins",
          cook: "1 hr 30 mins",
          total: "1 hr 45 mins",
          servings: "4",
          yield: "4 servings",
          Nutrition_info:
            "Per Serving: 512 calories; protein 21.7g; carbohydrates 63.6g; fat 20g; cholesterol 62.7mg; sodium 416.5mg. ",
        },
        oven_roasted_potatoes: {
          title: "Oven-Roasted Potatoes",
          image: "./images/oven_roasted_potatoes.PNG",
          ingredients: ["Potato", "olive oil", "salt and pepper"],
          steps: [
            "Preheat oven to 400 degrees F",
            "Add olive oil, seasoned salt, salt, and black pepper; mix well. Spread potatoes on a baking sheet.",
            "Bake in preheated oven for 30 minutes, turning potatoes occasionally",
          ],
          prep: "10 mins",
          cook: "1 hr",
          total: "1 hr 10 mins",
          servings: "6",
          yield: "6 servings",
          Nutrition_info:
            "Per Serving: 206 calories; protein 4.4g; carbohydrates 37.6g; fat 4.7g; sodium 553.5mg.",
        },
        oven_roasted_grapetomatoes: {
          title: "Oven Roasted Grape Tomatoes",
          image: "./images/oven_roasted_grapetomatoes.PNG",
          ingredients: [
            "Tomato",
            "garlic",
            "salt",
            "olive oil",
            "basil",
          ],
          steps: [
            "Preheat oven to 350 degrees F",
            "Drizzle olive oil over tomatoes and top with garlic, basil and salt",
            "Bake in the preheated oven until tomatoes are tender, about 30 minutes",
          ],
          prep: "15 mins",
          cook: "30 mins",
          total: "45 mins",
          servings: "2",
          yield: "2 servings",
          Nutrition_info:
            "Per Serving: 113 calories; protein 2.2g; carbohydrates 11.7g; fat 7.5g; sodium 98.7mg.",
        },
        tomato_mozzarella_salad: {
          title: "Tomato Mozzarella Salad",
          image: "./images/tomato_mozzarella_salad.PNG",
          ingredients: [
            "Tomato",
            "mozzarella cheese",
            "olive oil",
            "salt",
            "balsamic vinegar",
          ],
          steps: [
            "Place tomato slices, alternating with mozzarella slices, on a large serving platter.",
            "Drizzle over tomatoes and mozzarella olive oil, salt and vinegar",
          ],
          prep: "10 mins",
          cook: "10 mins",
          total: "20 mins",
          servings: "6",
          yield: "6 servings",
          Nutrition_info:
            "Per Serving: 199 calories; protein 10.1g; carbohydrates 6.2g; fat 15.2g; cholesterol 24.2mg; sodium 338.3mg.",
        },
        french_strawberry_cake: {
          title: "French Strawberry Cake",
          image: "./images/french_strawberry_cake.PNG",
          ingredients: [
            "white sugar",
            "2 eggs",
            "vanilla extract",
            "baking powder",
            "Strawberry",
          ],
          steps: [
            "Preheat the oven to 350 degrees F ",
            "Whisk together flour, baking powder, and salt in a medium bowl",
            "Spread batter into the prepared cake pan",
            "Bake in the preheated oven",
          ],
          prep: "20 mins",
          cook: "40 mins",
          total: "1 hr",
          servings: "10",
          yield: "1 8-inch round cake pan",
          Nutrition_info:
            "Per Serving: 294 calories; protein 3.7g; carbohydrates 42g; fat 12.9g; cholesterol 66.6mg; sodium 141.3mg.",
        },
        cookie_butter_cookies: {
          title: "Cookie Butter Cookies",
          image: "./images/cookie_butter_cookies.PNG",
          ingredients: [
            "Butter",
            "brown sugar",
            "cup of cookie butter",
            "2 cups flour",
            "1 egg",
          ],
          steps: [
            "Preheat oven to 350 degrees F",
            "Beat butter, brown sugar, and 3/4 cup white sugar with an electric mixer in a large bowl until smooth. ",
            "Bake in preheated oven until golden brown, about 12 minutes.",
          ],
          prep: "15 mins",
          cook: "12 mins",
          total: "27 mins",
          servings: "25",
          yield: "25 cookies",
          Nutrition_info:
            "Per Serving: 196 calories; protein 2.6g; carbohydrates 24g; fat 10.2g; cholesterol 22.1mg; sodium 125.3mg.",
        },
        grilled_cheese_sandwich: {
          title: "Grilled Cheese Sandwich",
          image: "./images/grilled_cheese_sandwich.PNG",
          ingredients: [
            "1 tablespoon butter",
            "Cheese",
            "1 glazed raised ring doughnut, halved horizontally",
          ],
          steps: [
            "Spread butter onto the cut sides of the doughnut",
            "Cook, flipping once, until lightly browned on both sides and cheese is melted, about 4 minutes.",
          ],
          prep: "5 mins",
          cook: "4 mins",
          total: "9 mins",
          servings: "1",
          yield: "1 sandwich",
          Nutrition_info:
            "Per Serving: 543 calories; protein 17.9g; carbohydrates 27.8g; fat 40.6g; cholesterol 98mg; sodium 745.6mg. ",
        },
      },
    },
    Français: {
      title: "Résultats",
      time_to_cook: "Temps à cuire: ",
      recipes: {
        chicken_marinade: {
          title: "Marinade au Poulet",
          image: "./images/chicken_marinade.PNG",
          ingredients: ["i1", "i2", "i3"],
          steps: ["step1", "step2", "step3", "step4"],
        },
        teriyaki_chicken: {
          title: "Poulet teriyaki",
          image: "./images/teriyaki_chicken.PNG",
          ingredients: ["i1", "i2", "i3"],
          steps: ["step1", "step2", "step3", "step4"],
        },
        grilled_tuna: {
          title: "Thon grillé",
          image: "./images/grilled_tuna.PNG",
          ingredients: ["i1", "i2", "i3"],
          steps: ["step1", "step2", "step3", "step4"],
        },
        oven_fried_salmon: {
          title: "Saumon frit au four",
          image: "./images/oven_fried_salmon.PNG",
          ingredients: ["i1", "i2", "i3"],
          steps: ["step1", "step2", "step3", "step4"],
        },
        beef_stew: {
          title: "Ragoût de bœuf",
          image: "./images/beef_stew.PNG",
          ingredients: ["i1", "i2", "i3"],
          steps: ["step1", "step2", "step3", "step4"],
        },
        roasted_garlic: {
          title: "Ail rôti",
          image: "./images/roasted_garlic.PNG",
          ingredients: ["i1", "i2", "i3"],
          steps: ["step1", "step2", "step3", "step4"],
        },
        stuffed_potatoes: {
          title: "Pommes de terre farcies",
          image: "./images/stuffed_potatoes.PNG",
          ingredients: ["i1", "i2", "i3"],
          steps: ["step1", "step2", "step3", "step4"],
        },
        oven_roasted_potatoes: {
          title: "Pommes de terre rôties au four",
          image: "./images/oven_roasted_potatoes.PNG",
          ingredients: ["i1", "i2", "i3"],
          steps: ["step1", "step2", "step3", "step4"],
        },
        oven_roasted_grapetomatoes: {
          title: "Tomates raisins rôties au four",
          image: "./images/oven_roasted_grapetomatoes.PNG",
          ingredients: ["i1", "i2", "i3"],
          steps: ["step1", "step2", "step3", "step4"],
        },
        tomato_mozzarella_salad: {
          title: "Salade de tomates et mozzarella",
          image: "./images/tomato_mozzarella_salad.PNG",
          ingredients: ["i1", "i2", "i3"],
          steps: ["step1", "step2", "step3", "step4"],
        },
        french_strawberry_cake: {
          title: "Gâteau aux fraises à la française",
          image: "./images/french_strawberry_cake.PNG",
          ingredients: ["i1", "i2", "i3"],
          steps: ["step1", "step2", "step3", "step4"],
        },
        cookie_butter_cookies: {
          title: "Biscuits au beurre",
          image: "./images/cookie_butter_cookies.PNG",
          ingredients: ["i1", "i2", "i3"],
          steps: ["step1", "step2", "step3", "step4"],
        },
        grilled_cheese_sandwich: {
          title: "Sandwich au fromage grillé",
          image: "./images/grilled_cheese_sandwich.PNG",
          ingredients: ["i1", "i2", "i3"],
          steps: ["step1", "step2", "step3", "step4"],
        },
      },
    },
  };

  props.language === "Français"
    ? (content = content.Français)
    : (content = content.English);

  return (
    <div className={props.warn ? "warning": "hide"} style={divBorderStyle}>
      <h3 style={{ marginTop: 30 }}>{content.title}</h3>
      <Card style={{ width: "18rem" }}>
        <Card.Link href="/recipes">
          <Card.Body>
            <Card.Title>
              {content.recipes.cookie_butter_cookies.title}
            </Card.Title>
            <Card.Img variant="top" src={cookie_butter_cookies} />
            <Card.Text>
              <p align="right">
                {content.time_to_cook}{" "}
                {content.recipes.cookie_butter_cookies.total}{" "}
              </p>
            </Card.Text>
          </Card.Body>
        </Card.Link>
      </Card>
    </div>
  );
}

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

  const [showResults, setShowResults] = useState(false);

  const handleToggleClick = () => {
    setShowResults((prevState) => !prevState);
  }

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
        <button className="btn btn-primary" onClick={handleToggleClick}>
          {showResults ? 'Hide Results' : 'Show Results'}
        </button>
        <ResultsSection warn={showResults} />
      </div>
    </Container>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Ingredients />, rootElement);
export default Ingredients;