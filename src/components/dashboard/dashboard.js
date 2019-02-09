import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import  HOC  from '../wrapper/wrapper';
import './dashboard.css';

class DashboardPage extends Component {
    render(){
        return(
            <div className="Dashboard-main">
                <Form >
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label className="mr-sm-2">Username</Label>
                    <Input type="email"  placeholder="Please enter username" />
                    </FormGroup>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label className="mr-sm-2">Password</Label>
                    <Input type="password" placeholder="Please enter password" />
                    </FormGroup>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label className="mr-sm-2">E-mail</Label>
                    <Input type="email" placeholder="Please enter email" />
                    </FormGroup>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label className="mr-sm-2">Emp-ID</Label>
                    <Input type="text" placeholder="Please enter empid" />
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
            </div>
        )
    }
}

export default HOC(DashboardPage);