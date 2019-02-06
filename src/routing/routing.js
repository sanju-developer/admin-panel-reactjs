import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Login } from '../components/login/login';

export function AppRouting(){
   return(
    <Router>
        <div className="routing">
            <Route exact path="/" component={Login} />
        </div>
    </Router>
   )
}