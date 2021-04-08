import React from "react";
import banana_smoothie from "./images/banana_smoothie.PNG";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import styled from "styled-components";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import {Link, useLocation} from "react-router-dom";

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

  let previousPage = useLocation();

  console.log(previousPage);

  let recId = previousPage.recipeId;

  let content = {
    English: {
      breadcrumb_home: "Home",
      breadcrumb_ingr: "Ingredients",
      prep: "Prep: ",
      cook: "Cook: ",
      total: "Total: ",
      servings: "Servings: ",
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
      servings: "Portions: ",
      yield: "Rendement: ",
      nutrition_info_button: "Info. nutritionnelle",
      ingredients: "Ingrédients",
      instructions: "Instructions",
    },
  };
  props.language === "Français"
    ? (content = content.Français)
    : (content = content.English);


  let resultContent = {
    English: {
      title: "Results",
      time_to_cook: "Time to Cook: ",
      notFound: "Sorry we couldn’t find a recipe with the ingredients you chose.",
      recipes: [
         { id: "chicken_marinade",
          title: "Chicken Marinade",
          image: "/chicken_marinade.PNG",
          ingredients: [
            "- Cup of olive oil",
            "- Spicy brown mustard",
            "- Chicken",
          ],
          steps: [
            "1. In a large bowl, mix the olive oil and mustard, and place chiken in the bowl",
            "2. Preheat the grill for high heat.",
            "3. Oil grill grate. Discard marinade, and place chicken on grate. Cook 6 to 8 minutes on each side, until juices run clear.",
          ],
          prep: "15 mins",
          cook: "16 mins",
          total: "4 hrs 30 mins",
          servings: "4",
          yield: "4 servings",
          Nutrition_info:
            "Per Serving: 549 calories; protein 27.5g; carbohydrates 7g; fat 46.1g; cholesterol 67.2mg; sodium 1573.9mg.",
        },
        { id:"teriyaki_chicken",
          title: "Teriyaki Chicken",
          image: "/teriyaki_chicken.PNG",
          ingredients: [
            "- Chicken",
            "- Sugar",
            "- Soy sauce",
            "- 2 cloves garlic, minced",
          ],
          steps: [
            "1. Rinse chicken halves, and pat dry with paper towels",
            "2. mix sugar, garlic and pour on chicken",
            "3. Bake chicken uncovered in the preheated oven for 1 hour",
          ],
          prep: "-",
          cook: "-",
          total: "-",
          servings: "6",
          yield: "6 servings",
          Nutrition_info:
            "Per Serving: 604 calories; protein 44.3g; carbohydrates 27.9g; fat 34.2g; cholesterol 170.3mg; sodium 1963mg.",
        },
        { id:"grilled_tuna",
          title: "Grilled Tuna",
          image: "/grilled_tuna.PNG",
          ingredients: [
            "- Tuna",
            "- 3 tablespoons extra virgin olive oil",
            "- Salt ",
            "- 1 lime, juiced",
          ],
          steps: [
            "1. Place tuna steaks and olive oil in a large resealable plastic bag. Seal, and refrigerate for 1 hour",
            "2. Preheat the grill for medium heat",
            "3. Season tuna with salt and pepper, and cook on the preheated grill approximately 6 minutes, turning once",
          ],
          prep: "10 mins",
          cook: "6 mins",
          total: "1 hr 16 mins",
          servings: "4",
          yield: "4 servings",
          Nutrition_info:
            "Per Serving: 281 calories; protein 40g; carbohydrates 1.8g; fat 11.8g; cholesterol 77.1mg; sodium 644.2mg.",
        },
        { id: "oven_fried_salmon",
          title: "Oven-Fried Salmon",
          image: "/oven_fried_salmon.PNG",
          ingredients: ["- Garlic", "- Cheese", "- Salmon"],
          steps: [
            "1. Preheat the oven to 500 degrees F ",
            "2. Coat salmon on all sides with olive oil mixture",
            "3. Bake in the preheated oven",
          ],
          prep: "10 mins",
          cook: "10 mins",
          total: "25 mins",
          servings: "6",
          yield: "6 servings",
          Nutrition_info:
            "Per Serving: 405 calories; protein 31.2g; carbohydrates 13.7g; fat 24.2g; cholesterol 80.3mg; sodium 694.7mg.",
        },
        { id: "beef_stew",
          title: "Beef Stew",
          image: "/beef_stew.PNG",
          ingredients: [
            "- Vegetable oil",
            "- Garlic",
            "- 1 onion",
            "- Beef",
            "- 1 can crushed tomatoes",
          ],
          steps: [
            "1. Heat oil in a large pot over medium-high heat. Add meat, flour, onion, and garlic",
            "2. Add broth, tomatoes and cook for about 1 hour",
          ],
          prep: "20 mins",
          cook: "1 hr 10 mins",
          total: "1 hr 30 mins",
          servings: "8",
          yield: "8 servings",
          Nutrition_info:
            "Per Serving: 403 calories; protein 24.4g; carbohydrates 27.7g; fat 21.5g; cholesterol 62.6mg; sodium 238.3mg.",
        },
        {id: "roasted_garlic",
          title: "Roasted Garlic",
          image: "/roasted_garlic.PNG",
          ingredients: ["- Garlic", "- Olive oil"],
          steps: [
            "1. Preheat oven to 400 degrees F (200 degrees C).",
            "2. Arrange heads of garlic on a baking sheet. Sprinkle garlic with olive oil. Bake for 40 minutes to 1 hour",
          ],
          prep: "5 mins",
          cook: "1 hr",
          total: "1 hr 5 mins",
          servings: "15",
          yield: "15 servings",
          Nutrition_info:
            "Per Serving: 80 calories; protein 2.4g; carbohydrates 12.3g; fat 2.9g; sodium 6.4mg.",
        },
       { id:"stuffed_potatoes",
          title: "Stuffed Potatoes",
          image: "/stuffed_potatoes.PNG",
          ingredients: [
            "- Potato",
            "- Cheddar cheese",
            "- Sour cream and onion dip",
          ],
          steps: [
            "1. Preheat oven to 350 degrees F",
            "2. Bake potatoes in preheated oven for 45 minutes",
            "3. Slice tops off of potatoes and scoop the flesh into a large bowl",
            "4. To the potato flesh add the cheese and dip. Mix well and spoon mixture into potato skins.",
          ],
          prep: "15 mins",
          cook: "1 hr 30 mins",
          total: "1 hr 45 mins",
          servings: "4",
          yield: "4 servings",
          Nutrition_info:
            "Per Serving: 512 calories; protein 21.7g; carbohydrates 63.6g; fat 20g; cholesterol 62.7mg; sodium 416.5mg. ",
        },
       { id: "oven_roasted_potatoes",
          title: "Oven-Roasted Potatoes",
          image: "/oven_roasted_potatoes.PNG",
          ingredients: ["- Potato", "- Olive oil", "- Salt", "- Pepper"],
          steps: [
            "1. Preheat oven to 400 degrees F",
            "2. Add olive oil, seasoned salt, salt, and black pepper; mix well. Spread potatoes on a baking sheet.",
            "3. Bake in preheated oven for 30 minutes, turning potatoes occasionally",
          ],
          prep: "10 mins",
          cook: "1 hr",
          total: "1 hr 10 mins",
          servings: "6",
          yield: "6 servings",
          Nutrition_info:
            "Per Serving: 206 calories; protein 4.4g; carbohydrates 37.6g; fat 4.7g; sodium 553.5mg.",
        },
         {id: "oven_roasted_grapetomatoes",
          title: "Oven Roasted Grape Tomatoes",
          image: "/oven_roasted_grapetomatoes.PNG",
          ingredients: [
            "- Tomato",
            "- Garlic",
            "- Salt",
            "- Olive oil",
            "- Basil",
          ],
          steps: [
            "1. Preheat oven to 350 degrees F",
            "2. Drizzle olive oil over tomatoes and top with garlic, basil and salt",
            "3. Bake in the preheated oven until tomatoes are tender, about 30 minutes",
          ],
          prep: "15 mins",
          cook: "30 mins",
          total: "45 mins",
          servings: "2",
          yield: "2 servings",
          Nutrition_info:
            "Per Serving: 113 calories; protein 2.2g; carbohydrates 11.7g; fat 7.5g; sodium 98.7mg.",
        },
         {id: "tomato_mozzarella_salad",
          title: "Tomato Mozzarella Salad",
          image: "/tomato_mozzarella_salad.PNG",
          ingredients: [
            "- Tomato",
            "- Mozzarella cheese",
            "- Olive oil",
            "- Salt",
            "- Balsamic vinegar",
          ],
          steps: [
            "1. Place tomato slices, alternating with mozzarella slices, on a large serving platter.",
            "2. Drizzle over tomatoes and mozzarella olive oil, salt and vinegar",
          ],
          prep: "10 mins",
          cook: "10 mins",
          total: "20 mins",
          servings: "6",
          yield: "6 servings",
          Nutrition_info:
            "Per Serving: 199 calories; protein 10.1g; carbohydrates 6.2g; fat 15.2g; cholesterol 24.2mg; sodium 338.3mg.",
        },
         {id: "french_strawberry_cake",
          title: "French Strawberry Cake",
          image: "/french_strawberry_cake.PNG",
          ingredients: [
            "- White sugar",
            "2 eggs",
            "- Vanilla extract",
            "- Baking powder",
            "- Strawberry",
          ],
          steps: [
            "1. Preheat the oven to 350 degrees F ",
            "2. Whisk together flour, baking powder, and salt in a medium bowl",
            "3. Spread batter into the prepared cake pan",
            "4. Bake in the preheated oven",
          ],
          prep: "20 mins",
          cook: "40 mins",
          total: "1 hr",
          servings: "10",
          yield: "1 8-inch round cake pan",
          Nutrition_info:
            "Per Serving: 294 calories; protein 3.7g; carbohydrates 42g; fat 12.9g; cholesterol 66.6mg; sodium 141.3mg.",
        },
         {id: "cookie_butter_cookies",
          title: "Cookie Butter Cookies",
          image: "/cookie_butter_cookies.PNG",
          ingredients: [
            "- Butter",
            "- Brown sugar",
            "- Cup of cookie butter",
            "- 2 cups flour",
            "- 1 egg",
          ],
          steps: [
            "1. Preheat oven to 350 degrees F",
            "2. Beat butter, brown sugar, and 3/4 cup white sugar with an electric mixer in a large bowl until smooth. ",
            "3. Bake in preheated oven until golden brown, about 12 minutes.",
          ],
          prep: "15 mins",
          cook: "12 mins",
          total: "27 mins",
          servings: "25",
          yield: "25 cookies",
          Nutrition_info:
            "Per Serving: 196 calories; protein 2.6g; carbohydrates 24g; fat 10.2g; cholesterol 22.1mg; sodium 125.3mg.",
        },
       { id: "grilled_cheese_sandwich",
          title: "Grilled Cheese Sandwich",
          image: "/grilled_cheese_sandwich.PNG",
          ingredients: [
            "- 1 tablespoon butter",
            "- Cheese",
            "- 1 glazed raised ring doughnut, halved horizontally",
          ],
          steps: [
            "1. Spread butter onto the cut sides of the doughnut",
            "2. Cook, flipping once, until lightly browned on both sides and cheese is melted, about 4 minutes.",
          ],
          prep: "5 mins",
          cook: "4 mins",
          total: "9 mins",
          servings: "1",
          yield: "1 sandwich",
          Nutrition_info:
            "Per Serving: 543 calories; protein 17.9g; carbohydrates 27.8g; fat 40.6g; cholesterol 98mg; sodium 745.6mg. ",
        },
      ],
    },
    Français: {
      title: "Résultats",
      time_to_cook: "Temps à cuire: ",
      notFound: "Désolé, nous n'avons pas trouvé de recette avec les ingrédients que vous avez choisis.",
      recipes: [
         { id: "chicken_marinade",
          title: "Marinade au Poulet",
          image: "/chicken_marinade.PNG",
          ingredients: ["i1", "i2", "i3"],
          steps: ["step1", "step2", "step3", "step4"],
          prep: "15 mins",
          cook: "16 mins",
          total: "4 hrs 30 mins",
          servings: "4",
          yield: "4 portions",
          Nutrition_info:
            "Par portion: 549 calories; protéine 27,5 g; glucides 7g; graisse 46,1 g; cholestérol 67,2 mg; sodium 1573,9 mg.",
        },
       { id:"teriyaki_chicken",
          title: "Poulet teriyaki",
          image: "/teriyaki_chicken.PNG",
          ingredients: ["i1", "i2", "i3"],
          steps: ["step1", "step2", "step3", "step4"],
          prep: "-",
          cook: "-",
          total: "-",
          servings: "6",
          yield: "6 portions",
          Nutrition_info:
            "Par portion: 604 calories; protéine 44,3 g; glucides 27,9 g; graisse 34,2 g; cholestérol 170,3 mg; sodium 1963 mg.",
        },
       {id: "grilled_tuna",
          title: "Thon grillé",
          image: "/grilled_tuna.PNG",
          ingredients: ["i1", "i2", "i3"],
          steps: ["step1", "step2", "step3", "step4"],
          prep: "10 mins",
          cook: "6 mins",
          total: "1 hr 16 mins",
          servings: "4",
          yield: "4 portions",
          Nutrition_info:
            "Par portion: 281 calories; protéine 40g; glucides 1,8 g; matières grasses 11,8 g; cholestérol 77,1 mg; sodium 644,2 mg.",
        },
       {id: "oven_fried_salmon",
          title: "Saumon frit au four",
          image: "/oven_fried_salmon.PNG",
          ingredients: ["i1", "i2", "i3"],
          steps: ["step1", "step2", "step3", "step4"],
          prep: "10 mins",
          cook: "10 mins",
          total: "25 mins",
          servings: "6",
          yield: "6 portions",
          Nutrition_info:
            "Par portion: 405 calories; protéine 31,2 g; glucides 13,7 g; graisse 24,2 g; cholestérol 80,3 mg; sodium 694,7 mg.",
        },
       {id: "beef_stew",
          title: "Ragoût de bœuf",
          image: "/beef_stew.PNG",
          ingredients: ["i1", "i2", "i3"],
          steps: ["step1", "step2", "step3", "step4"],
          prep: "20 mins",
          cook: "1 hr 10 mins",
          total: "1 hr 30 mins",
          servings: "8",
          yield: "8 portions",
          Nutrition_info:
            "Par portion: 403 calories; protéine 24,4 g; glucides 27,7 g; matières grasses 21,5 g; cholestérol 62,6 mg; sodium 238,3 mg.",
        },
       {id: "roasted_garlic",
          title: "Ail rôti",
          image: "/roasted_garlic.PNG",
          ingredients: ["i1", "i2", "i3"],
          steps: ["step1", "step2", "step3", "step4"],
          prep: "5 mins",
          cook: "1 hr",
          total: "1 hr 5 mins",
          servings: "15",
          yield: "15 portions",
          Nutrition_info:
            "Par portion: 80 calories; protéine 2,4 g; glucides 12,3 g; graisse 2,9 g; sodium 6,4 mg.",
        },
       {id: "stuffed_potatoes",
          title: "Pommes de terre farcies",
          image: "/stuffed_potatoes.PNG",
          ingredients: ["i1", "i2", "i3"],
          steps: ["step1", "step2", "step3", "step4"],
          prep: "15 mins",
          cook: "1 hr 30 mins",
          total: "1 hr 45 mins",
          servings: "4",
          yield: "4 portions",
          Nutrition_info:
            "Par portion: 512 calories; protéine 21,7 g; glucides 63,6 g; graisse 20g; cholestérol 62,7 mg; sodium 416,5 mg.",
        },
       {id: "oven_roasted_potatoes",
          title: "Pommes de terre rôties au four",
          image: "/oven_roasted_potatoes.PNG",
          ingredients: ["i1", "i2", "i3"],
          steps: ["step1", "step2", "step3", "step4"],
          prep: "10 mins",
          cook: "1 hr",
          total: "1 hr 10 mins",
          servings: "6",
          yield: "6 portions",
          Nutrition_info:
            "Par portion: 206 calories; protéine 4,4 g; glucides 37,6 g; graisse 4,7 g; sodium 553,5 mg.",
        },
       {id: "oven_roasted_grapetomatoes",
          title: "Tomates raisins rôties au four",
          image: "/oven_roasted_grapetomatoes.PNG",
          ingredients: ["i1", "i2", "i3"],
          steps: ["step1", "step2", "step3", "step4"],
          prep: "15 mins",
          cook: "30 mins",
          total: "45 mins",
          servings: "2",
          yield: "2 portions",
          Nutrition_info:
            "Par portion: 113 calories; protéine 2,2 g; glucides 11,7 g; graisse 7,5 g; sodium 98,7 mg.",
        },
       {id: "tomato_mozzarella_salad",
          title: "Salade de tomates et mozzarella",
          image: "/tomato_mozzarella_salad.PNG",
          ingredients: ["i1", "i2", "i3"],
          steps: ["step1", "step2", "step3", "step4"],
          prep: "10 mins",
          cook: "10 mins",
          total: "20 mins",
          servings: "6",
          yield: "6 portions",
          Nutrition_info:
            "Par portion: 199 calories; protéine 10,1 g; glucides 6,2 g; graisse 15,2 g; cholestérol 24,2 mg; sodium 338,3 mg.",
        },
       {id: "french_strawberry_cake",
          title: "Gâteau aux fraises à la française",
          image: "/french_strawberry_cake.PNG",
          ingredients: ["i1", "i2", "i3"],
          steps: ["step1", "step2", "step3", "step4"],
          prep: "20 mins",
          cook: "40 mins",
          total: "1 hr",
          servings: "10",
          yield: "1 moule à gâteau rond de 8 pouces",
          Nutrition_info:
            "Par portion: 294 calories; protéine 3,7 g; glucides 42g; matières grasses 12,9 g; cholestérol 66,6 mg; sodium 141,3 mg.",
        },
       {id: "cookie_butter_cookies",
          title: "Biscuits au beurre",
          image: "/cookie_butter_cookies.PNG",
          ingredients: ["i1", "i2", "i3"],
          steps: ["step1", "step2", "step3", "step4"],
          prep: "15 mins",
          cook: "12 mins",
          total: "27 mins",
          servings: "25",
          yield: "25 biscuits",
          Nutrition_info:
            "Par portion: 196 calories; protéine 2,6 g; glucides 24g; graisse 10,2 g; cholestérol 22,1 mg; sodium 125,3 mg.",
        },
       {id: "grilled_cheese_sandwich",
          title: "Sandwich au fromage grillé",
          image: "/grilled_cheese_sandwich.PNG",
          ingredients: ["i1", "i2", "i3"],
          steps: ["step1", "step2", "step3", "step4"],
          prep: "5 mins",
          cook: "4 mins",
          total: "9 mins",
          servings: "1",
          yield: "1 sandwich",
          Nutrition_info:
            "Par portion: 543 calories; protéine 17,9 g; glucides 27,8 g; graisse 40,6 g; cholestérol 98 mg; sodium 745,6 mg.",
        },
      ],
    },
  };

  props.language === "Français"
    ? (resultContent = resultContent.Français)
    : (resultContent = resultContent.English);


  const showRecipe = (resultContent.recipes).map((recipe) => {

    if (recipe.id === recId) {
      return(
        <div>
          <Breadcrumb>
            <Breadcrumb.Item href="/" style={breadcrumb}>
              {content.breadcrumb_home}
            </Breadcrumb.Item>
            <Breadcrumb.Item href="/ingredients" style={breadcrumb}>
              {content.breadcrumb_ingr}
            </Breadcrumb.Item>
            <Breadcrumb.Item active style={breadcrumb}>
              {recipe.title}
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
                       {recipe.title}
                    </h4>
                    <br />
                    <br />
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      style={imgStyle}
                    />
                  </div>
                </div>
              </div>
              <Card style={{ width: "14rem" }}>
                <ListGroup variant="flush">
                  <ListGroup.Item>{content.prep}{recipe.prep}</ListGroup.Item>
                  <ListGroup.Item>{content.cook}{recipe.cook}</ListGroup.Item>
                  <ListGroup.Item>{content.total}{recipe.total}</ListGroup.Item>
                  <ListGroup.Item>{content.servings}{recipe.servings}</ListGroup.Item>
                  <ListGroup.Item>{content.yield}{recipe.yield}</ListGroup.Item>
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
                      {recipe.Nutrition_info}
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

                    <div>
                      {(recipe.ingredients).map((item) => (<h5 style={{paddingTop:20, paddingLeft:15}}>{item}</h5>))}
                    </div>
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
                    <div>
                      {(recipe.steps).map((item) => (<h5 style={{paddingTop:20, paddingLeft:15}}>{item}</h5>))}
                    </div>
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>)
    }
  });

  return (
    <Container>
      {showRecipe}
    </Container>
  );
}

export default Recipes;
