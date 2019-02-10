import React, { Component } from 'react';
import  HOC  from '../../wrapper/wrapper';

class ListOfDevicesPage extends Component {
    render(){
        return(
            <div className="listofdevicess-main">
                <h1>List of Devices</h1>
            </div>
        )
    }
}

export default HOC(ListOfDevicesPage);