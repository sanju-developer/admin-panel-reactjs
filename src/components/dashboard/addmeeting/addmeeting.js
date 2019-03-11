import React, { Component } from 'react';
import { Media } from 'reactstrap';
import './addmeeting.css';
import  HOC  from '../../wrapper/wrapper';

class AddMeetingPage extends Component {

    render(){
        return(
            <div className="AddMeeting">
            <h1>Add meeting page </h1>
            </div>
        )
    }
}

export default HOC(AddMeetingPage);