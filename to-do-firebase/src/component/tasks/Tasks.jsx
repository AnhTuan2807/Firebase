import Moment from "react-moment";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import {removeTaskAction } from '../action/taskAction'
import Task from "./Task";



const Tasks = ({tasks}) => {

    return (
      <>
        <table className="table table-dark container"
               style={{marginTop: "30px"}}>
            <thead>
                <tr className="text-info">
                  <th scope="col">Tasks</th>
                  <th scope="col">Added on</th>
                  <th scope="col">Status</th>
                  <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                {tasks && tasks.map(task => <Task task = {task} key={task.id}/>)}
            </tbody>
        </table>
      </>
    );
  };
  const mapStateToProps = (state) => {
    console.log(state);
    const tasks = state.firestore.ordered.tasks;
    return {
        tasks: tasks,
    };
};
export default compose(
    connect(mapStateToProps),
    firestoreConnect((ownProps) => [
        {
          collection: "tasks",
          orderBy: ["date" , "desc"] ,
        },
    ])
)(Tasks);
// export default Tasks;