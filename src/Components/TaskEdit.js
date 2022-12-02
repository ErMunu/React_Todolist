import React, { Component } from 'react';
import Styles from '../Styles/todo.module.css'
import { connect } from 'react-redux';
import { updateTask } from '../Actions';
import { bindActionCreators } from 'redux';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//components for handling task updation
class TaskEdit extends Component {
  handleFormSubmit = (e) => {
    e.preventDefault();
    const Task = this.refs.task.value;
    const updateTaskAPI = (Task) => {
      fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.task.id}`, {
        method: 'PUT',
        body: JSON.stringify({
          id: this.props.task.id,
          title: Task,
          userId: this.props.task.userId,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => {
          this.props.updateTask(this.props.sn, json);
          this.props.handleShowEditForm();
        });
    }
    if (Task !== this.props.task) {
      updateTaskAPI(Task);
    }
  }
  render() {
    return (
      <span>
        <form onSubmit={this.handleFormSubmit}  className={Styles.form}>
          <input type='text' ref='task' defaultValue={this.props.task.title} />
          <button><FontAwesomeIcon icon={faUpload} /></button>
        </form>
      </span>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateTask }, dispatch);
}
export default connect(() => { return {} }, mapDispatchToProps)(TaskEdit);
