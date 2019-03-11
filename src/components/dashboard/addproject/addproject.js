import React, { Component } from 'react';
import { Media } from 'reactstrap';
import './addproject.css';
import  HOC  from '../../wrapper/wrapper';

class AddProjectPage extends Component {

    render(){
        return(
            <div className="AddProject">
            <h1> Add Project </h1>
            </div>
        )
    }
}

export default HOC(AddProjectPage);