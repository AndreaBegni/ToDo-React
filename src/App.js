import React, { Component } from "react";
import Navigation from "./Components/Navigation";
import ToDoList from "./Components/ToDoList";
import FormNewToDo from "./Components/FormNewToDo";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: this.loadToDos()
    };
    console.log("sono costruttore", this.state);
    this.updateToDos = this.updateToDos.bind(this);
    this.loadToDos = this.loadToDos.bind(this);

    //check if the page gets closed
    window.addEventListener("beforeunload", () =>
      //save the current todos that are in the state into the localStorage
      localStorage.setItem("todos", JSON.stringify(this.state.todos))
    );
  }

  loadToDos = () => {
    //check there is a todo item already saved in localStorage
    if (localStorage.getItem("todos") != null) {
      //set the todos in state with the todos saved in the localStorage
      return JSON.parse(localStorage.getItem("todos"));
    } else {
      return [];
    }
  };

  updateToDos = newTodos => {
    this.setState(
      {
        todos: newTodos
      },
      () => {
        console.log(this.state);
      }
    );
  };

  render() {
    console.log("sono render", this.state);
    return (
      <div className="App">
        <Navigation></Navigation>
        <FormNewToDo
          todos={this.state.todos}
          updateToDos={this.updateToDos}
        ></FormNewToDo>
        <ToDoList todos={this.state.todos}></ToDoList>
      </div>
    );
  }
}
