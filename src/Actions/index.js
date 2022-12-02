export const GET_TASKLIST = "GET_TASKLIST";
export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const UPDATE_TASK = "UPDATE_TASK";

// action code for viewing all task in a list 

export const getTaskList = (tasks = []) => {
    return {
        type: GET_TASKLIST,
        payload: tasks
    }
}

// action code for adding a new task in list 
export const addTask = (task) => {
    return {
        type: ADD_TASK,
        payload: task
    }
}
// action code for deleting a  task in list 
export const deleteTask = (id) => {
    return {
        type: DELETE_TASK,
        payload: id
    }
}

// action code for updating a existing task in list 
export const updateTask = (sn, task) => {

    return {
        type: UPDATE_TASK,
        payload: {
            sn,
            task
        }
    }
}

