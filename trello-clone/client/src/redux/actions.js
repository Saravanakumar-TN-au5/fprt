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

export const {setLists, updateListHead} = actions;