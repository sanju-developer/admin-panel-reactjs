import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './login.css';
import daffodil_logo from '../../assets/daffodil-logo.png';
import { Alert } from 'reactstrap';
import { withRouter } from 'react-router-dom';

export class Login extends Component {

    constructor(props) {
        super(props);

        this.changeusername = this.changeusername.bind(this);
        this.loginAdmin = this.loginAdmin.bind(this);
        this.changepswd = this.changepswd.bind(this);

        // this.fields_are_unfilled = false;

        this.state = {
            username: '',
            password: '',
            fields_are_unfilled: false
        }
    }

    changeusername = (e) => {
        this.setState({ username: e.target.value }, () => console.log(this.state))
    }

    changepswd = (e) => {
        this.setState({ password: e.target.value }, () => console.log(this.state))
    }

    loginAdmin = () => {
        if (this.state.username === '' || this.state.password === '') {
            this.setState({ fields_are_unfilled: true }, () => console.log(this.state))
        }else{
            this.setState({ fields_are_unfilled: false }, () => console.log(this.state))
            localStorage.setItem('authtoken','sadasdasd');
            this.props.history.push(`dashboard`);
        }
    }

    render() {
        return (
            <div className="login-container">
                <div className="login-header">
                    {this.state.fields_are_unfilled === true?
                        <Alert className="error-alert" color="danger">
                            Please fill username/password 
                        </Alert> : ''}
                    <div  >
                        <img className="logo" src={daffodil_logo} />
                    </div>
                    <Form className="login-form">
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Label for="exampleEmail" className="mr-sm-2 form-label">Admin</Label>
                            <Input type="text" value={this.state.username} onChange={this.changeusername} placeholder="admin name" />
                        </FormGroup>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Label for="examplePassword" className="mr-sm-2 form-label">Password</Label>
                            <Input type="password" value={this.state.password} onChange={this.changepswd} placeholder="****" />
                        </FormGroup>
                        <Button onClick={this.loginAdmin} >Submit</Button>
                    </Form>
                </div>
            </div>
        );
    }
}