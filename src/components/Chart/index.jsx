import React from "react";
import { Card, Container } from "react-bootstrap";
import Pie from "../Pie";
const Chart = () => {
  return (
    <div>
      <Container>
        <Card>
          <Card.Header>
            <h4>Task Priorities</h4>{" "}
          </Card.Header>
          <Card.Body>
            <Pie />
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Chart;
