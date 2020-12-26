import React from 'react';
import { Link } from "react-router-dom";

const NavBar = () => (
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/Job-list">Find a Job</Link>
            </li>
            <li>
                <Link to="/producer-display">Find Your Crew</Link>
            </li>
            <li>
                <Link to="/post-job">Post a Job</Link>
            </li>
        </ul>
    </nav>
);

export default NavBar;