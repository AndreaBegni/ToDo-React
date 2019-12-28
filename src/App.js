import React from "react";
import Navigation from "./Components/Navigation";
import ToDoList from "./Components/ToDoList";
import FormNewToDo from "./Components/FormNewToDo";
import todoJSON from "./todos.json"

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <FormNewToDo></FormNewToDo>
      <ToDoList todoJSON={todoJSON}></ToDoList>
    </div>
  );
}

export default App;
