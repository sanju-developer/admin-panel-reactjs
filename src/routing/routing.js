import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import { Login } from '../components/login/login';
import  DashboardPage  from '../components/dashboard/dashboard';
import  HOC  from '../components/wrapper/wrapper';

// const token = localStorage.getItem('authtoken');


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
            </div>
            </Router>
        )
    }
}