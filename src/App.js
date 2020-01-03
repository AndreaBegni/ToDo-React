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

    this.updateToDos = this.updateToDos.bind(this);
    this.loadToDos = this.loadToDos.bind(this);
  }

  loadToDos = () => {
    //localStorage.setItem("todos", JSON.stringify(list));
    if (localStorage.getItem("todos") != null) {
      return JSON.parse(localStorage.getItem("todos"));
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
