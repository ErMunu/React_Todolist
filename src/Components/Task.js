import React, { Component } from 'react'
import Styles from '../Styles/todo.module.css'
import { connect } from 'react-redux';
import { deleteTask } from '../Actions';
import { bindActionCreators } from 'redux';
import TaskEdit from './TaskEdit';
import { faTrashCan, faPenToSquare, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//components for handling operations in task
class Task extends Component {
    constructor() {
        super();
        this.state = {
            edit: false
        }
    }
    //handling updation in to_do list
    openUpdateList = (sn, title) => {
        if (this.state.edit) {
            this.setState({
                edit: false,
            })
        } else {
            this.setState({
                edit: true,
            })
        }
    }

    //handling deletion in to_do list
    handleDeleteTask = (id) => {
        this.props.deleteTask(id);
    }
    render() {
        const { title } = this.props.task;
        return (
            <tr>
                <td>
                    {this.props.sn + 1}
                </td>

                {!this.state.edit && <td> {title} </td>}
                <td>
                    {!this.state.edit &&
                        <button onClick={() => this.openUpdateList(this.props.sn, title)}><FontAwesomeIcon icon={faPenToSquare} /></button>
                    }

                    {!this.state.edit &&
                        <button onClick={() => this.handleDeleteTask(this.props.sn)}><FontAwesomeIcon icon={faTrashCan} /></button>
                    }

                    {this.state.edit && <TaskEdit task={this.props.task} sn={this.props.sn} handleShowEditForm={this.openUpdateList} />}
                </td>
                {this.state.edit && <td>
                    <button onClick={() => this.openUpdateList(this.props.sn, title)}><FontAwesomeIcon icon={faCircleXmark} /></button>
                </td>}

            </tr>

        )
    }
}

// dispaching action to reducers
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ deleteTask }, dispatch);
}
export default connect(() => { return {} }, mapDispatchToProps)(Task);