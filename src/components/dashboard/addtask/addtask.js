import React, { Component } from 'react';
import { Media } from 'reactstrap';
import './addtask.css';
import  HOC  from '../../wrapper/wrapper';

class AddTaskPage extends Component {

    render(){
        return(
            <div className="AddTask">
            <h1> Add Task </h1>
            </div>
        )
    }
}

export default HOC(AddTaskPage);