import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import './sidebar.css';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";


export class SidebarPage extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="sidebar-main">
            <ListGroup>
                <ListGroupItem  href="#" className="user-register-form" >
                    <Link className="list-item" to="/dashboard">
                        Register Employee >
                    </Link>
                </ListGroupItem>
                <ListGroupItem  href="#" className="user-register-form" >
                    <Link className="list-item" to="/ListOfEmployee">
                        List of Employees >
                    </Link>
                </ListGroupItem>
                <ListGroupItem  href="#" className="user-register-form" >
                    <Link className="list-item" to="/ListOfDevices">
                        List of Devices >
                    </Link>
                </ListGroupItem>
                <ListGroupItem  href="#" className="user-register-form" >
                    <Link className="list-item" to="/Accounts">
                    Accounts >
                    </Link>
                </ListGroupItem>
                <ListGroupItem  href="#" className="user-register-form" >
                    <Link className="list-item" to="/UpdatePassword">
                        Change Password >
                    </Link>
                </ListGroupItem>
            </ListGroup>
            </div>
        )
    }
}