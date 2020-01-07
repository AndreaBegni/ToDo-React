import React, { Component } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

export default class Navigation extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>TODO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link onClick={() => this.props.setFormState()}>
              New Todo
            </Nav.Link>
            <NavDropdown title="Sort by priority" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={() => this.props.sortTodos(-1)}>
                From high to low
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => this.props.sortTodos(1)}>
                From low to high
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
