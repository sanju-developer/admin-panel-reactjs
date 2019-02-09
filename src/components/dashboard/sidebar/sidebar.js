import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import './sidebar.css';

export class SidebarPage extends Component{
    render(){
        return(
            <div className="sidebar-main">
            <ListGroup>
                <ListGroupItem  href="#" className="user-register-form">Register Employee ><span class="glyphicon glyphicon-chevron-right"></span></ListGroupItem>
                <ListGroupItem  href="#" className="user-register-form">List Of Employees ></ListGroupItem>
                <ListGroupItem  href="#" className="user-register-form">List Of Devices ></ListGroupItem>
                <ListGroupItem  href="#" className="user-register-form">Accounts ></ListGroupItem>
                <ListGroupItem  href="#" className="user-register-form">Change Password ></ListGroupItem>
            </ListGroup>
            </div>
        )
    }
}