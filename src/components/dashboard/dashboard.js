import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import HOC from '../wrapper/wrapper';
import './dashboard.css';
import { Alert } from 'reactstrap';

class DashboardPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            empid: '',
            email: '',
            success: false,
            failure: false,
            err: {
                username_err: '',
                password_err: '',
                empid_err: '',
                email_err: ''
            }
        }
        this.onchange = this.onchange.bind(this);
    }

    onchange = (e) => {
        this.setState({ failure: false})
        let statename = e.target.name;
        let value = e.target.value;
        this.setState({ [statename]: e.target.value }, () => this.validatefields(statename, value));
    }

    validatefields = (statename, value) => {
        let err = { ...this.state.err };
        let username_error = this.state.err.username_err;
        let password_error = this.state.err.password_err;
        let empid_error = this.state.err.empid_err;
        let email_error = this.state.err.email_err;

        switch (statename) {
            case 'username':
                if (value === '') {
                    username_error = 'Username is required'
                    err.username_err = username_error
                    this.setState({ err })
                } else if ((/^[0-9]/i).test(value) === true) {
                    username_error = 'Please enter a valid entry'
                    err.username_err = username_error
                    this.setState({ err })
                } else if (value.length <= 2) {
                    username_error = 'Please enter a valid username'
                    err.username_err = username_error
                    this.setState({ err })
                } else {
                    err.username_err = ''
                    this.setState({ err })
                }
                break;
            case 'password':
                if (value.length <= 5) {
                    password_error = 'Password is too short...'
                    err.password_err = password_error
                    this.setState({ err })
                } else if (value === '') {
                    password_error = 'Password is required'
                    err.password_err = password_error
                    this.setState({ err })
                } else {
                    err.password_err = ''
                    this.setState({ err })
                }
                break;
            case 'empid':
                if (value === '') {
                    empid_error = 'Emp-id is required'
                    err.empid_err = empid_error
                    this.setState({ err })
                } else if (value.length <= 2) {
                    empid_error = 'Please enter a valid empid'
                    err.empid_err = empid_error
                    this.setState({ err })
                } else {
                    err.empid_err = ''
                    this.setState({ err })
                }
                break;
            case 'email':
                if ((/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i).test(value) === false) {
                    email_error = 'Enter a valid email address'
                    err.email_err = email_error;
                    this.setState({ err })
                } else if (value === '') {
                    email_error = 'Email is required'
                    err.email_err = email_error;
                    this.setState({ err })
                } else {
                    err.email_err = ''
                    this.setState({ err })
                }
                break;
        }
    }

    registeremployee = () => {
        if (this.state.err['username_err'] === '' && this.state.err['password_err'] === '' && this.state.err['empid_err'] === '' && this.state.err['email_err'] === '' && this.state.username !== '' && this.state.password !== '' && this.state.empid !== '' && this.state.email !== '') {
            this.setState({success: true});
            this.setState({ failure: false});
            this.setState({username : ''});
            this.setState({password : ''});
            this.setState({email : ''});
            this.setState({empid : ''});
            setTimeout(()=>{
                this.setState({success: false})
            },2500);
        }else if( this.state.username === '' || this.state.password === '' || this.state.empid=== '' || this.state.email === ''){
            this.setState({ failure: true})
        }
    }

    render() {
        return (
            <div className="Dashboard-main">
                <Form >
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label className="mr-sm-2">Username</Label>
                        <Input type="email" name="username" value={this.state.username} onChange={(e) => this.onchange(e)} placeholder="Please enter username" />
                        {this.state.err['username_err'] ? <Alert className="error-alert" color="danger">
                            {this.state.err['username_err']}
                        </Alert> : ''}
                    </FormGroup>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label className="mr-sm-2">Password</Label>
                        <Input type="password" name="password" value={this.state.password} onChange={(e) => this.onchange(e)} placeholder="Please enter password" />
                        {this.state.err['password_err'] ? <Alert className="error-alert" color="danger">
                            {this.state.err['password_err']}
                        </Alert> : ''}
                    </FormGroup>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label className="mr-sm-2">E-mail</Label>
                        <Input type="email" name="email" value={this.state.email} onChange={(e) => this.onchange(e)} placeholder="Please enter email" />
                        {this.state.err['email_err'] ? <Alert className="error-alert" color="danger">
                            {this.state.err['email_err']}
                        </Alert> : ''}
                    </FormGroup>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label className="mr-sm-2">Emp-ID</Label>
                        <Input type="text" name="empid" value={this.state.empid} onChange={(e) => this.onchange(e)} placeholder="Please enter empid" />
                        {this.state.err['empid_err'] ? <Alert className="error-alert" color="danger">
                            {this.state.err['empid_err']}
                        </Alert> : ''}
                    </FormGroup>
                    <Button onClick={this.registeremployee} >Submit</Button>
                </Form>
                {this.state.success ?  
                <Alert className="error-alert" color="success">
                        Employee registered successfully
                </Alert>: ''}
                {this.state.failure ?  
                <Alert className="error-alert" color="danger">
                        Please fill the required details of employee.
                </Alert>: ''}
            </div>
        )
    }
}

export default HOC(DashboardPage);