export const ADD_TO_DB = "ADD_TO_DB";
export const SEARCH_DB = "SEARCH_DB";


// export const REMOVE_TO_TASK = "REMOVE_TO_TASK";
// export const EDIT_TO_TASK = "EDIT_TO_TASK";


export const addToDB = (allData) => {
    return {type: ADD_TO_DB, allData}
}

export const searchDB = (name) => {
    return {type: SEARCH_DB, name}
}

// export const removeToTask = (taskId) => {
//     return {type: REMOVE_TO_TASK, taskId}
// }


// export const editToTask = (taskName, taskId) => {
//     return {type: EDIT_TO_TASK, taskName, taskId}
// }