import React, { Component } from 'react';
import  HOC  from '../../wrapper/wrapper';
// import { withRouter } from 'react-router-dom';

class AccountsPage extends Component {
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div className="accounts-main">
                <h1>Account Section</h1>
            </div>
        )
    }
}

export default HOC(AccountsPage);