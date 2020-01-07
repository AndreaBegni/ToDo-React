import React, { Component } from "react";
import Navigation from "./Components/Navigation";
import ToDoList from "./Components/ToDoList";
import FormNewToDo from "./Components/FormNewToDo";
import { Container } from "react-bootstrap";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: this.loadToDos(),
      newTodo: false
    };
    this.updateToDos = this.updateToDos.bind(this);
    this.loadToDos = this.loadToDos.bind(this);

    //check if the page gets closed
    window.addEventListener("beforeunload", () =>
      //save the current todos that are in the state into the localStorage
      localStorage.setItem("todos", JSON.stringify(this.state.todos))
    );
  }

  showForm = () =>{
    if (this.state.newTodo)
      return <FormNewToDo updateToDos={this.updateToDos}></FormNewToDo>
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

  updateToDos = (action, position, todo) => {
    let todos = this.state.todos;
    if (action === "add") {
      todos.push(todo);
    } else if (action === "delete") {
      todos.splice(position, 1);
    } else if (action === "modify") {
      todos[position] = todo;
    }
    this.setState(
      {
        todos: todos
      },
      console.log(this.state.todos)
    );
  };

  render() {
    return (
      <div className="App">
        <Container>
          <Navigation></Navigation>
          {this.showForm()}
          <ToDoList
            todos={this.state.todos}
            updateToDos={this.updateToDos}
          ></ToDoList>
        </Container>
      </div>
    );
  }
}
