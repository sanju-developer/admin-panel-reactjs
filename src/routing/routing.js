import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import { Login } from '../components/login/login';
import  DashboardPage  from '../components/dashboard/dashboard';
import ListOfEmployeePages from '../components/dashboard/listofemployee/listofemployee';
import ListOfDevicesPages from '../components/dashboard/listofdevices/listofdevices';
import UpdatePasswordPage from '../components/dashboard/update-password/update-password';
import AccountsPage from '../components/dashboard/accounts/account';

//CHECKING TOKEN IS PRESENT OR NOT
const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
    const token = localStorage.getItem('authtoken');
        if(token){
            this.isAuthenticated = true;
        }else{
            this.isAuthenticated = false;
        }
    },
    signout(cb) {
      this.isAuthenticated = false;
      setTimeout(cb, 100);
    }
};

//AUTHENTICATING ROUTE ON BASES OF TOKEN
function PrivateRoute({ component: Component, ...rest }) {
    fakeAuth.authenticate();
    return (
      <Route
        {...rest}
        render={props =>
          fakeAuth.isAuthenticated ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/"
              }}
            />
          )
        }
      />
    );
}

export class Routing extends React.Component {
    render(){
        return(
            <Router>
            <div className="react-routing">
                <Route exact={true} strict path="/" component ={Login} />
                <PrivateRoute path="/dashboard" component ={DashboardPage} />
                <PrivateRoute path="/Accounts" component ={AccountsPage} />
                <PrivateRoute path="/UpdatePassword" component ={UpdatePasswordPage} />
                <PrivateRoute path="/ListOfDevices" component ={ListOfDevicesPages} />
                <PrivateRoute path="/ListOfEmployee" component ={ListOfEmployeePages} />
            </div>
            </Router>
        )
    }
}