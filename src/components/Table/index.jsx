import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Badge from "react-bootstrap/Badge";
import Paginations from "../Paginations";
import { Col, Row } from "react-bootstrap";

const TaskTable = (props) => {
  const { filteredTasks } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalItems = filteredTasks.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredTasks.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <div className="table-responsive">
      <Table responsive bordered hover variant="dark">
        <thead>
          <tr>
            <th>Todo Title</th>
            {/* <th>Description</th> */}
            <th>Status</th>
            <th>Name</th>
            <th>Created</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((task, index) => (
            <tr key={index}>
              <td>{task.todo}</td>
              {/* <td>{task.description}</td> */}
              <td>
                <Badge
                  bg={
                    task.priority === "LOW"
                      ? "info"
                      : task.priority === "HIGH"
                      ? "success"
                      : "warning"
                  }
                >
                  {task.priority}
                </Badge>
              </td>
              <td>{task.createdBy}</td>
              <td>{task.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Row>
        <Col md={4} />
        <Col md={3}>
          <Paginations
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </Col>
      </Row>

      <p>{totalItems}</p>
      <p>{totalPages}</p>
      <p>{indexOfLastItem}</p>
      <p>{indexOfFirstItem}</p>
      {/* <p>{currentItems}</p> */}
    </div>
  );
};

export default TaskTable;
