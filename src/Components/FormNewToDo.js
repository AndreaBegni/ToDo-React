import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Jumbotron, Container } from "react-bootstrap";

export default class FormNewToDo extends Component {
  constructor(props) {
    super(props);

    this.newToDo = this.newToDo.bind(this);
    this.title = React.createRef();
    this.priority = React.createRef();
    this.description = React.createRef();
  }

  newToDo() {
    //create a newTodo object
    let newTodo = {
      title: "Nothing",
      description: "Nothing",
      priority: "low",
      done: false
    };
    //fill the newTodo object
    newTodo.title = this.title.current.value;
    newTodo.description = this.description.current.value;
    newTodo.priority = this.priority.current.value;
    //add the todo to the todo list in the app state
    this.props.updateToDos("add", null, newTodo);
    this.props.setFormState();
  }

  render() {
    return (
      <Jumbotron>
        <Container>
          <Row>
            <Col md={{ span: 4, offset: 5 }}>
              <h1>New Task</h1>
            </Col>
          </Row>
        </Container>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control ref={this.title} placeholder="Enter title" />
            </Form.Group>
            <Form.Group as={Col} md={4} controlId="formPriority">
              <Form.Label>Priority</Form.Label>
              <Form.Control
                ref={this.priority}
                as="select"
                placeholder="Priority"
              >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>
          <Form.Group controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control ref={this.description} as="textarea" rows="4" />
          </Form.Group>
          <Button variant="primary" type="button" onClick={this.newToDo}>
            Save
          </Button>
        </Form>
      </Jumbotron>
    );
  }
}
