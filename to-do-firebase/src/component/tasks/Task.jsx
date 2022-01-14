import React from "react"
import moment from "react-moment";
import { connect } from "react-redux";
import {removeTaskAction } from '../action/taskAction'

const Task = ({task , removeTaskAction}) => {

    const handleRemove = (task)=>{
        removeTaskAction(task)
    }
    return(
        <>
            <tr> 
            <th>{task.task}</th>
            {/* <td>{moment(task.date.toDate()).calendar()}</td> */}
            <td>13/01/2022</td>
            <td>
                {""}
                <span className="material-icons-outlined"
                        style={{cursor : 'pointer'}}>
                    Done
                </span>
            </td>
            <td>
                <span  className="material-icons-outlined text-danger" 
                style={{cursor : 'pointer'}}
                
                >
                    Delete  
                </span>
            </td>
            </tr>
        </>
    )
}
const mapDispatchProps = dispatch =>{
    return {
        removeTaskAction  :  (task) => dispatch(removeTaskAction(task)) 
    }
}
  
export default  connect(null ,mapDispatchProps )(Task);