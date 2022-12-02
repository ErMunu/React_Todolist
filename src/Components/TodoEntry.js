import React, { Component } from 'react';
import Styles from '../Styles/todo.module.css'
import { connect } from 'react-redux';
import { addTask } from '../Actions';
import { bindActionCreators } from 'redux';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//creating TodoEntry class components
class TodoEntry extends Component {
  handleFormSubmit = (e) => {
    e.preventDefault();
    const newTask = this.refs.task.value;
    const addTaskAPI = (newTask) => {
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: newTask,
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => this.props.addTask(json));
    }
    if (newTask.length > 0) {
      addTaskAPI(newTask);
    }
    this.refs.task.value = '';
  }
  render() {
    return (
      <div className={Styles.formcontainer}>
        <form onSubmit={this.handleFormSubmit}>
          <input type='text' ref='task' placeholder='Add New Task' />
          <button><FontAwesomeIcon icon={faCirclePlus}/></button>
        </form>
      </div>
    )
  }
}

//dispatching reducer to actions
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addTask }, dispatch);
}
export default connect(() => { return {} }, mapDispatchToProps)(TodoEntry);