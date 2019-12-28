import React, { Component } from "react";
import { Nav } from "react-bootstrap";

export default class Navigation extends Component {
  render() {
    return (
      <Nav justify variant="tabs" defaultActiveKey="#action1">
        <Nav.Item>
          <Nav.Link href="#action1">
            <h2>Tasks</h2>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#action2">
            <h2>Completed Tasks</h2>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    );
  }
}
