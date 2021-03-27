import React, { Component } from "react";
import Todos from "./Todos";
import AddTodo from "./AddTodo";
import NavBar from "./NavBar";
import Home from "./Home";

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
        <div className="home">
          <Home />
        </div>
      </div>
    );
  }
}

export default App;
