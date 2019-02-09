import React, { Component } from 'react';
import { Media } from 'reactstrap';
import './header.css';
import daffodil_logo from '../../../assets/daffodil-logo.png';
import admin from '../../../assets/admin.png';


export class HeaderPage extends Component {
    render(){
        return(
            <div className="header-main">
                 <Media>
                    <Media left href="#">
                        <img className="admin-img" src={admin} />
                    </Media>
                    <Media body className="media-text" >
                        <Media heading>
                        Vivek Rajoriya
                        </Media>
                            IT Department Head
                        </Media>
                    {/* <img className="daff-logo" src={daffodil_logo} /> */}
                </Media>
            </div>
        )
    }
}