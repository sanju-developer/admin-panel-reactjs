import React, { Component } from 'react';
import  HOC  from '../../wrapper/wrapper';


class ListOfEmployeePage extends Component {
    render(){
        return(
            <div className="ListOfEmployee-main">
                <h1>ListOfEmployeePage</h1>
            </div>
        )
    }
}

export default HOC(ListOfEmployeePage);