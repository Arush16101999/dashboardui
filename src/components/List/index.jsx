import React from "react";
import { Badge, Card, Container, ListGroup } from "react-bootstrap";

const List = () => {
  return (
    <Container>
      <Card>
        <Card.Header>
          <h3>Tasks</h3>{" "}
        </Card.Header>
        <Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item className="d-flex justify-content-between align-items-start">
              <div>
                <p>
                  <Badge bg="success" pill>
                    D
                  </Badge>{" "}
                  Cras justo odio
                </p>
              </div>
              <div>
                <Badge bg="success" pill>
                  Done
                </Badge>
                &nbsp;
                <small className="text-muted">sep 18</small>
              </div>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between align-items-start">
              <div>
                <p>
                  <Badge bg="success" pill>
                    D
                  </Badge>{" "}
                  Cras justo odio
                </p>
              </div>
              <div>
                <Badge bg="success" pill>
                  Done
                </Badge>
                &nbsp;
                <small className="text-muted">sep 18</small>
              </div>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <p>Cras justo odio</p>
              </div>
              <Badge bg="warning" pill>
                In-Progress
              </Badge>
              &nbsp;
              <small className="text-muted">sep 18</small>
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default List;
