import React from "react";
import { Card, CloseButton, Container } from "react-bootstrap";
import "./Header.css";
const Header = () => {
  return (
    <>
      <Container fluid>
        <Card body>
          <div className="contain">
            <div className="details">
              <Card.Body>
                <Card.Title>
                  <h2>Welcome back, John Doe</h2>
                </Card.Title>

                <small className="text-muted">
                  With supporting text below as a natural lead-in to additional
                  content.
                </small>

                <Card.Text>
                  <a href="url">Look here for more information</a>
                </Card.Text>
              </Card.Body>
            </div>
            <div className="close-btn">
              <CloseButton />
            </div>
          </div>
        </Card>
      </Container>
    </>
  );
};

export default Header;
