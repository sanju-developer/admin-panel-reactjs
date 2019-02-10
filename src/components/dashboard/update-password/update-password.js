import React, { Component } from 'react';
import HOC from '../../wrapper/wrapper';
import { Alert } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './update-password.css';

class UpdatePasswordPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current_password: '',
            new_password: '',
            success: false,
            failure: false,
            err: {
                current_password_err: '',
                new_password_err: ''
            }
        }
    }
    
    onchange = (e) => {
        this.setState({ failure: false})
        let statename = e.target.name;
        let value = e.target.value;
        this.setState({ [statename]: e.target.value }, () => this.validatefields(statename, value));
    }

    validatefields = (statename, value) => {
        let err = { ...this.state.err };
        let current_password_error = this.state.err.current_password_err;
        let new_password_error = this.state.err.new_password_err;

        switch (statename) {
            case 'current_password':
            if (value.length <= 5) {
                new_password_error = 'Password is too short...'
                err.current_password_err = new_password_error
                this.setState({ err })
            } else if (value === '') {
                new_password_error = 'Password is required'
                err.current_password_err = new_password_error
                this.setState({ err })
            } else {
                err.current_password_err = ''
                this.setState({ err })
            }
            break;
            case 'new_password':
            if (value.length <= 5) {
                new_password_error = 'Password is too short...'
                err.new_password_err = new_password_error
                this.setState({ err })
            } else if (value === '') {
                new_password_error = 'Password is required'
                err.new_password_err = new_password_error
                this.setState({ err })
            } else {
                err.new_password_err = ''
                this.setState({ err })
            }
            break;
        }
    }

    updatePassword = () => {
        if (this.state.err['current_password_err'] === '' && this.state.err['new_password_err'] === '' && this.state.current_password !== '' && this.state.new_password !== '') {
            this.setState({success: true});
            this.setState({ failure: false});
            this.setState({new_password : ''}, ()=> console.log(this.state));
            this.setState({current_password : ''},()=> console.log(this.state));
            setTimeout(()=>{
                this.setState({success: false})
            },2500);
        }else if( this.state.new_password === '' || this.state.current_password === ''){
            this.setState({ failure: true})
        }
    }


    render() {
        return (
            <div className="UpdatePassword">
                <h1 className="heading">Update your password here</h1>
                <Form className="UpdatePassword-main" >
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label className="mr-sm-2">Current Password</Label>
                        <Input type="password" name="current_password" value={this.state.current_password} onChange={(e) => this.onchange(e)} placeholder="Please enter your current password" />
                        {this.state.err['current_password_err'] ? <Alert className="error-alert" color="danger">
                            {this.state.err['current_password_err']}
                        </Alert> : ''}
                    </FormGroup>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label className="mr-sm-2">New Password</Label>
                        <Input type="password" name="new_password" value={this.state.new_password} onChange={(e) => this.onchange(e)} placeholder="Please enter your new password" />
                        {this.state.err['new_password_err'] ? <Alert className="error-alert" color="danger">
                            {this.state.err['new_password_err']}
                        </Alert> : ''}
                    </FormGroup>
                    <Button onClick={this.updatePassword} >Update password</Button>
                </Form>
                {this.state.success ?  
                <Alert className="error-alert" color="success">
                        Password upadted
                </Alert>: ''}
                {this.state.failure ?  
                <Alert className="error-alert" color="danger">
                        Please fill the required details of employee.
                </Alert>: ''}
            </div>
        )
    }
}

export default HOC(UpdatePasswordPage);