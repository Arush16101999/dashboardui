import React from "react";
import { Card, Container, ListGroup } from "react-bootstrap";

const Activity = () => {
  return (
    <>
      <Container>
        <Card>
          <Card.Header>
            <h4>Activity Feed</h4>{" "}
          </Card.Header>
          <Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                <div>
                  <b>Kushantha Charuka </b> created{" "}
                </div>
                <small className="text-muted">sep 16, 2022 at 11.30 Am</small>
              </ListGroup.Item>
              <ListGroup.Item>
                <div>Cras justo odio</div>
                <small className="text-muted">sep 16, 2022 at 11.30 Am</small>
              </ListGroup.Item>
              <ListGroup.Item>
                <div>Cras justo odio</div>
                <small className="text-muted">sep 16, 2022 at 11.30 Am</small>
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Activity;
