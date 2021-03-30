import React, { Component } from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import Ingredients from "./Ingredients";
import Recipes from "./Recipes";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  state = {
    todos: [
      { id: 1, content: "buy some milk" },
      { id: 2, content: "play mario kart" },
    ],
  };
  deleteTodo = (id) => {
    const todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      todos,
    });
  };
  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos,
    });
  };
  render() {
    return (
      <div className="instarecipeapp container">
        <div className="menu-active navigation-menu">
          <NavBar />
        </div>
        <Router>
          <Switch>
            <Route path="/home" exact component={() => <Home />} />
            <Route
              path="/ingredients"
              exact
              component={() => <Ingredients />}
            />
            <Route path="/recipe" exact component={() => <Recipes />} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
