import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import './style.scss';

export class NavBar extends Component {
  render() {
    return (
      <Navbar id="Navbar-Main" collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand href="/" className="Navbar-Logo">
          DF
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            {/*  <Nav.Link className="Navbar-Links" to="/AboutMe">
              About Me
            </Nav.Link>
            <Nav.Link className="Navbar-Links" href="#">
              Skills
            </Nav.Link>
            <Nav.Link className="Navbar-Links" to="#">
              Projects
            </Nav.Link> */}
            <Nav.Link
              className="Navbar-Links"
              eventKey={2}
              href="https://drive.google.com/file/d/1YXqwG1rPlsVzePq6SU9ShyNMjSldVJXv/view?usp=sharing"
            >
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
