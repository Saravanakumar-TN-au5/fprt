import axios from 'axios';
const actions = {}

actions.setLists = () => {
    return (dispatch) => {
        axios.get(`${process.env.REACT_APP_API_URI}/lists`)
        .then(response => {
            dispatch({type: 'SET_LISTS', payload: response.data});
        })
    }
}

actions.updateListHead = (id,updatedHead, cb) => {
    return (dispatch) => {
        axios.patch(`${process.env.REACT_APP_API_URI}/updateListName`, {id,name: updatedHead})
        .then(response => {
            dispatch({type: 'UPDATE_LIST_HEAD', payload: response.data});
            cb();
        })
    }
}

actions.updateTaskName = (listid, id, updatedName) => {
    return (dispatch) => {
        axios.patch(`${process.env.REACT_APP_API_URI}/updateTaskName`, {id,name: updatedName})
        .then(response => {
            dispatch({type: 'UPDATE_TASK_NAME', payload: {listid, task: response.data}});
        })
    }
}

actions.updateTaskStatus = (listid, id, updatedStatus) => {
    return (dispatch) => {
        axios.patch(`${process.env.REACT_APP_API_URI}/updateTaskStatus`, {id,status: updatedStatus})
        .then(response => {
            dispatch({type: 'UPDATE_TASK_STATUS', payload: {listid, task: response.data}});
        })
    }
}

export const {setLists, updateListHead, updateTaskName, updateTaskStatus} = actions;