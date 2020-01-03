import React, { Component } from "react";
import Navigation from "./Components/Navigation";
import ToDoList from "./Components/ToDoList";
import FormNewToDo from "./Components/FormNewToDo";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoJSON: this.loadToDos()
    };

    this.updateToDos = this.updateToDos.bind(this);
    this.loadToDos = this.loadToDos.bind(this);
  }

  loadToDos = () => {
    //localStorage.setItem("todoJSON", JSON.stringify(list));
    if (localStorage.getItem("todoJSON") != null) {
      return JSON.parse(localStorage.getItem("todoJSON"));
    }
  };

  updateToDos = newTodos => {
    this.setState(
      {
        todoJSON: newTodos
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
          todoJSON={this.state.todoJSON}
          updateToDos={this.updateToDos}
        ></FormNewToDo>
        <ToDoList todoJSON={this.state.todoJSON}></ToDoList>
      </div>
    );
  }
}
