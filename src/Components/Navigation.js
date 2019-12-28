import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";

export default class Navigation extends Component {
  render() {
    return (
      <Nav justify variant="tabs" defaultActiveKey="#action1">
        <Nav.Item>
          <Nav.Link href="#action1">Tasks</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#action2">
            Completed Tasks
          </Nav.Link>
        </Nav.Item>
      </Nav>
    );
  }
}
