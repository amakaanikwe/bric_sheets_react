import React from 'react';
import { Link } from "react-router-dom";
import '../../App.css';

const NavBar = () => (
    <nav className="navbar navbar-expand-md bg-dark navbar-dark">
        <a className="navbar-brand" href="#"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link" href="#"><Link to="/">Home</Link></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#"><Link to="/Job-list">Find a Job</Link></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#"><Link to="/producer-display">Find Your Crew</Link></a>
            </li> 
            <li className="nav-item" style={{float: "right"}}>
                <a className="nav-link" href="#"><Link to="/post-job">Post a Job</Link></a>
            </li>   
            </ul>
        </div>  
    </nav>
);

export default NavBar;