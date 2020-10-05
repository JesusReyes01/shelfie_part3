import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './Header.css'

export default class Header extends Component{
    render(){
        return(
            <div className='header-flex'>
                <div className='icon'></div>
                <h1>SHELFIE</h1>
                <div className='link-flex'>
                    <Link to='/' className='DashboardDiv'>Dashboard</Link>
                    <Link to='/add' className='AddDiv'>Add Inventory</Link>
                </div>
            </div>
        )}
    

};