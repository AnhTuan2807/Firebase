import * as Type from './constant'



export const addTaskAction = (task)=>{
    return(dispatch , getstate , {getFirebase})=>{
        const firestore = getFirebase().firestore();
        firestore
            .collection("tasks")
            .add({
                ...task,
                date : new Date()
            })
            .then(()=>{
                dispatch({
                    // type : Type.ADD_TASK,
                    type: "ADD_TASK",
                    task
                })
            })
            .catch((err) =>{
                dispatch({
                    // type :  Type.ADD_TASK_ERR,
                    type: "ADD_TASK_ERR",
                    err
                })
            })
    }
}



export const removeTaskAction = (tasks)=>{
    return (dispatch , getstate, {getFirebase}) =>{
        const firestore = getFirebase().firestore()
        firestore
            .collection("tasks")
            .doc(tasks.id)
            .delete()
            .then(()=>{
                dispatch({
                    type : Type.REMOVE_TASK
                })
            })
            .catch((err) =>{
                dispatch({
                    type :  Type.REMOVE_TASK_ERR,
                    err
                })
            })
    }
}