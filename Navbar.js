import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

const NavContainer = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
      <NavLink className="nav-brand fw-bold fs-4 "  to="/">AY AMIT</NavLink>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
             
          >
            <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
          </Nav>
          <NavLink className="nav-link active"  to="/products">Products</NavLink>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2" 
              aria-label="Search"
            />

            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavContainer;
