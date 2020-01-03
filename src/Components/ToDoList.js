import React, { Component } from "react";
import { Accordion } from "react-bootstrap";
import { Card } from "react-bootstrap";

export default class ToDoList extends Component {
  renderTodos = todos => {
    if (todos != null) {
      return todos.map((todo, i) => (
        <Card key={i}>
          <Accordion.Toggle as={Card.Header} eventKey={i}>
            <h3>{todo.title}</h3>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey={i}>
            <Card.Body>{todo.description}</Card.Body>
          </Accordion.Collapse>
        </Card>
      ));
    }
  };

  render() {
    return <Accordion>{this.renderTodos(this.props.todos)}</Accordion>;
  }
}
