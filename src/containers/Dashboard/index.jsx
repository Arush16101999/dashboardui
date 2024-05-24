import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navbar, Container, Row, Col } from "react-bootstrap";
import TaskTable from "../../components/Table";
import Paginations from "../../components/Paginations";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [filterStatus, setFilterStatus] = useState("");

  useEffect(() => {
    getAllTasks();
  }, []);

  const getAllTasks = async () => {
    try {
      const data = await axios.get(
        "https://6363c8f68a3337d9a2e7d805.mockapi.io/api/to-do"
      );
      if (data) {
        console.log(data);
        setTasks(data.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  fetch("https://6363c8f68a3337d9a2e7d805.mockapi.io/api/to-do").then(
    (response) => {
      response.json().then((data) => {
        console.log(data);
      });
    }
  );

  const filteredTasks = tasks.filter((track) => {
    return track.priority.toLowerCase().includes(filterStatus.toLowerCase());
  });

  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navigation />
          {/* <Header /> */}
          {/* <Paginations /> */}
          <Navbar.Brand>
            {/* {tasks.map((head) => {
              return <h2>{head.name}</h2>;
            })} */}
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <br />
        <Row>
          <Col>
            <h3>TODO Management System</h3>
          </Col>
        </Row>
        <br />
        <Row>
          <TaskTable filteredTasks={filteredTasks} />
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
