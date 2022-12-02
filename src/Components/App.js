import React, { Component } from 'react'
import Styles from '../Styles/todo.module.css'
import { getTaskList } from '../Actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TodoEntry from './TodoEntry';
import Todolist from './TodoList';

class App extends Component {
  async componentDidMount() {
    // fetching task list via Api call and sending via props
    await fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        this.props.getTaskList(json)
      });
  }

  render() {
    return (
      <div className='App'>
        <h2 className={Styles.head}> ToDo List</h2>
        <TodoEntry />
        <div className={Styles.Todolist}>
          <Todolist />
        </div>
      </div>
    )
  }
}

// dispatching action to reducer
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getTaskList }, dispatch);
}
export default connect(() => { return {} }, mapDispatchToProps)(App);