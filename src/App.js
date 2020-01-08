import React, { Component } from "react";
import Navigation from "./Components/Navigation";
import ToDoList from "./Components/ToDoList";
import FormNewToDo from "./Components/FormNewToDo";
import { Container } from "react-bootstrap";

function sortOrder(criteria) {
  return (a, b) => {
    if (a["priority"] > b["priority"]) {
      return 1 * criteria;
    } else if (a["priority"] < b["priority"]) {
      return -1 * criteria;
    }
    return 0;
  };
}

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: this.loadToDos(),
      todosToShow: "all",
      newTodo: true
    };
    this.updateToDos = this.updateToDos.bind(this);
    this.loadToDos = this.loadToDos.bind(this);
    this.setFormState = this.setFormState.bind(this);
    this.sortTodos = this.sortTodos.bind(this);
    this.setTodosToShow = this.setTodosToShow.bind(this);
    this.filterTodosToShow = this.filterTodosToShow.bind(this);
    //check if the page gets closed
    window.addEventListener("beforeunload", () =>
      //save the current todos that are in the state into the localStorage
      localStorage.setItem("todos", JSON.stringify(this.state.todos))
    );
  }

  setTodosToShow = type => {
    this.setState({
      todosToShow: type
    });
  };

  filterTodosToShow = () => {
    if (this.state.todosToShow === "done") {
      return this.state.todos.filter(element => element.state === "done");
    } else if (this.state.todosToShow === "undone") {
      return this.state.todos.filter(element => element.state === "undone");
    } else {
      return this.state.todos;
    }
  };

  //criteria = 1 represent from low to high
  //criteria = -1 represent from high to low
  sortTodos = criteria => {
    let todos = this.state.todos;
    todos.sort(sortOrder(criteria));
    this.setState({
      todos: todos
    });
  };

  //set newTodo in state to the opposite boolean value that it has now
  setFormState = () => {
    this.setState({
      newTodo: !this.state.newTodo
    });
  };

  //shows the form to make a new todo
  showForm = () => {
    if (this.state.newTodo)
      return (
        <FormNewToDo
          updateToDos={this.updateToDos}
          setFormState={this.setFormState}
        ></FormNewToDo>
      );
  };

  loadToDos = () => {
    //check if there is a todo item already saved in localStorage
    if (localStorage.getItem("todos") != null) {
      //set the todos in state with the todos saved in the localStorage
      return JSON.parse(localStorage.getItem("todos"));
    } else {
      //returns an empty array
      return [];
    }
  };

  //key = the date of the todo that has to be deleted or modified
  //todo = the new todo that is going to replace the old one
  updateToDos = (action, key, todo) => {
    let todos = this.state.todos;
    if (action === "add") {
      todos.push(todo);
    } else if (action === "delete") {
      todos.splice(
        todos.findIndex(todo => todo.key === key),
        1
      );
    } else if (action === "modify") {
      todos[todos.findIndex(todo => todo.key === key)] = todo;
    }
    this.setState({
      todos: todos
    });
  };

  render() {
    return (
      <div className="App">
        <Container>
          <Navigation
            setFormState={this.setFormState}
            sortTodos={this.sortTodos}
            setTodosToShow={this.setTodosToShow}
          ></Navigation>
          {this.showForm()}
          <ToDoList
            todos={this.filterTodosToShow()}
            updateToDos={this.updateToDos}
          ></ToDoList>
        </Container>
      </div>
    );
  }
}
