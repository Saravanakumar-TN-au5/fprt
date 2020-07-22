let initialState = {
    lists: []
}

const reducer = (state=initialState, action) => {
    let stateCopy = {...state}
    switch (action.type) {
        case 'SET_LISTS':
            stateCopy.lists = action.payload;
            return stateCopy;
        case 'UPDATE_LIST_HEAD':
            let {_id, name} = action.payload;
            let index = stateCopy.lists.findIndex(list => list._id === _id);
            stateCopy.lists = [
                ...stateCopy.lists.slice(0,index),
                {...stateCopy.lists[index], name},
                ...stateCopy.lists.slice(index+1)
            ]
            return stateCopy;
        default:
            return stateCopy;
    }
}

export default reducer;