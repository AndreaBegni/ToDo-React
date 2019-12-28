import React, { Component } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

export default class ToDoList extends Component {
  constructor() {
    super();

    this.state = {
      todos: [
        { title: "Cosa da fare 1", description: "descrizione cosa da fare 1" },
        { title: "Cosa da fare 2", description: "descrizione cosa da fare 2" },
        { title: "Cosa da fare 3", description: "descrizione cosa da fare 3" }
      ]
    };
  }

  render() {
    const { todos } = this.state;
    const renderTodos = todos.map((todo, i) => (
      <Card key={i}>
        <Accordion.Toggle as={Card.Header} eventKey={i}>
          <h3>{todo.title}</h3>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={i}>
          <Card.Body>{todo.description}</Card.Body>
        </Accordion.Collapse>
      </Card>
    ));

    return <Accordion>{renderTodos}</Accordion>;
  }
}
