import React from "react";
import Table from "react-bootstrap/Table";
import Badge from "react-bootstrap/Badge";

const TaskTable = (props) => {
  const { filteredTasks } = props;
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
          {filteredTasks.map((task, index) => (
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
    </div>
  );
};

export default TaskTable;
