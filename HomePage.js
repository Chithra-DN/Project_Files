import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './HomePage.css';

export default function HomePage() {
  return (
    <div>
      <Navbar
        bg="danger"
        expand="lg"
        className="shadow"
        style={{ height: "10vh" }}
      >
        <Container>
          <Navbar.Brand as={Link} to={"/"}>
            <h2 className="fs-2 text-light">Education Loan Portfolio</h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto fs-5">
              <Nav.Link className="text-light">Home</Nav.Link>
              <Nav.Link as={Link} to={"/about"} className="text-light">
                About
              </Nav.Link>
              <Nav.Link as={Link} to={"/auth"} className="text-light">
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div>
        <div className="bg-image">
          <div className="text">
            <h1 className="tracking-in-expand-fwd text-danger fs-1">
              Education Loan Portfolio
            </h1>
            <h2 className="tracking-in-expand-fwd fs-2">
            Simplify Your Education Loan Process with Our Web Application
            </h2>
          </div>
          <div className="txt bg-danger">
            <h2 className="text-focus-in ">
              "Apply, Approve, Achieve: Education Loans Made Easy"
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
