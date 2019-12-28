import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Jumbotron, Container } from "react-bootstrap";

export default class FormNewToDo extends Component {
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
              <Form.Control placeholder="Enter title" />
            </Form.Group>
            <Form.Group as={Col} md={4} controlId="formPriority">
              <Form.Label>Priority</Form.Label>
              <Form.Control as="select" placeholder="Priority">
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>
          <Form.Group controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows="4" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Save
          </Button>
        </Form>
      </Jumbotron>
    );
  }
}
