import React, { Component } from "react";
import { connect } from "react-redux";
import Task from "./Task";
import { Table } from "react-bootstrap";

//creating class components
class TodoList extends Component {

  render() {
    const tasks = this.props.tasks;
    return (
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Task Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => {
            return <Task task={task} key={index} sn={index} />;
          })}
        </tbody>
      </Table>
    );
  }
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks,
  };
}
export default connect(mapStateToProps)(TodoList);
