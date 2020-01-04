import React, { Component } from "react";
import { Accordion, Image } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import trashCan from "../Images/trash_can.png";
import tick from "../Images/tick.png";

export default class ToDoList extends Component {
  doneTodo(e) {
    let todo = this.props.todos[e.target.id];
    todo.done = true;
    this.props.updateToDos("modify", e.target.id, todo);
  }

  deleteTodo(e) {
    this.props.updateToDos("delete", e.target.id, null);
  }

  renderTodos = todos => {
    if (todos != null) {
      return todos.map((todo, i) => (
        <Card ref={i} key={i}>
          <Accordion.Toggle bg="success" as={Card.Header} eventKey={i}>
            <Container>
              <Row>
                <Col md="4">
                  <h3>{todo.title}</h3>
                </Col>
                <Col md={{ span: 1, offset: 6 }}>
                  <Image
                    id={i}
                    src={tick}
                    style={{ width: "35px", height: "35px" }}
                    onClick={e => this.doneTodo(e)}
                  ></Image>
                </Col>
                <Col md="1">
                  <Image
                    id={i}
                    src={trashCan}
                    style={{ width: "35px", height: "35px" }}
                    onClick={e => this.deleteTodo(e)}
                  ></Image>
                </Col>
              </Row>
            </Container>
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
