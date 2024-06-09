import React from "react";
import { Navbar, Container } from "react-bootstrap";
import "./Navigation.css";
const Navigation = () => {
  return (
    <>
      <Container>
        <Navbar sticky="top" className="justify-content-between">
          <Navbar.Brand>Dashboard</Navbar.Brand>
          <Navbar.Brand>Dashboard</Navbar.Brand>
        </Navbar>
      </Container>
    </>
  );
};

export default Navigation;
