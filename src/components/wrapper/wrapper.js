import React, { Component } from 'react';
import { HeaderPage } from '../dashboard/header/header';
import { SidebarPage } from '../dashboard/sidebar/sidebar';

const HOC = (WrapperComponent) => {
    return class HOC extends Component{
        render() {
            return(
                <div className="wrapper-main">
                <React.Fragment >
                    <HeaderPage />
                    <SidebarPage />
                    <WrapperComponent />
                </React.Fragment>
                </div>
            )
        }
    }    
}

export default HOC;