import React, { Component } from "react";
import { Accordion, Image } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import trashCan from "../Images/trash_can.png";
import tick from "../Images/tick.png";

export default class ToDoList extends Component {
  doneTodo(e) {
    let todo = this.props.todos.filter(todo => todo.key === e.target.id);
    todo[0].state = "done";
    let key = e.target.id;
    this.props.updateToDos("modify", key, todo[0]);
  }

  deleteTodo(e) {
    let key = e.target.id;
    this.props.updateToDos("delete", key, null);
  }

  renderTodos = todos => {
    if (todos != null) {
      return todos.map((todo, i) => (
        <Card key={i}>
          <Accordion.Toggle bg="success" as={Card.Header} eventKey={i}>
            <Container>
              <Row>
                <Col md="4">
                  <h3>{todo.title}</h3>
                </Col>
                <Col md={{ span: 1, offset: 6 }}>
                  <Image
                    id={todo.key}
                    src={tick}
                    style={{ width: "35px", height: "35px" }}
                    onClick={e => this.doneTodo(e)}
                  ></Image>
                </Col>
                <Col md="1">
                  <Image
                    id={todo.key}
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
