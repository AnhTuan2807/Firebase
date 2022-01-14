import { Button, Form, Input } from "antd"
import { Component, useState } from "react"
import { connect } from "react-redux"
import {addTaskAction } from '../action/taskAction'


class AddTask extends Component{

    state = {
        task : '',
    }


    handleChange =(e)=>{
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    handleSubmit = (e)=>{
        e.preventDefault()
        this.props.addTaskAction(this.state);
        console.log(this.state);
        
        this.setState({task : ''}) 
    }

    render() {
        return (
            // <form onSubmit={this.handleSubmit} className="">
            //     <label htmlFor="task">Add A Task</label>
            //     <input type="text" placeholder="Task" onChange={this.handleChange}  id="task" value={this.state.task} className="form-control"/>
            //     <button type="submit" className="btn btn-primary"> Submit </button>
            // </form>     
            <form id="addTaskForm"className="container" autoComplete="off" style={{ marginTop: "30px" }}
            onSubmit={this.handleSubmit}>
            <legend> </legend>
            <div className="form-group">
              <label htmlFor="task">Add A Task</label>
              <input
                type="text"
                className="form-control"
                placeholder="Task"
                id="task"
                onChange={this.handleChange}
              />
            </div><legend> </legend>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>        
        );
    }
}

const mapDispatchProps = dispatch =>{
    return {
        addTaskAction  :  (task) => dispatch(addTaskAction(task)) 
    }
}


export default connect(null,mapDispatchProps)(AddTask) // null là state khi truyền vào là null