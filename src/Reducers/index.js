import {combineReducers} from 'redux';
import { GET_TASKLIST, ADD_TASK, DELETE_TASK, UPDATE_TASK } from '../Actions';

//reducer code from action
const taskReducers = (state=[], action) => {
    switch(action.type){
        case GET_TASKLIST:
            return action.payload;
        case ADD_TASK:
            return state = [action.payload,...state];
        case DELETE_TASK:
            state = state.filter((val,index)=>{
                return index !== action.payload;
            })
            return state;
        case UPDATE_TASK :
            state[action.payload.sn] = action.payload.task;
            return [...state];
        default:
            return state;
    }
}

const reducers = combineReducers({
    tasks: taskReducers
});

export default reducers;