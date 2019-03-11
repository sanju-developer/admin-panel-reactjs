import React, { Component } from 'react';
import { Media } from 'reactstrap';
import './addsession.css';
import  HOC  from '../../wrapper/wrapper';

class AddSessionPage extends Component {

    render(){
        return(
            <div className="AddSession">
            <h1> Add session </h1>
            </div>
        )
    }
}

export default HOC(AddSessionPage);