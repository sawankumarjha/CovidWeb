import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = ()=>{
    return(<>
    <nav className="navigation">
        <ul>
        <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
        <li><NavLink exact to="/prevention" activeClassName="active">Prevention</NavLink></li>
        <li><NavLink exact to="/symptom" activeClassName="active">Symptoms</NavLink></li>
        <li><NavLink exact to="/contact" activeClassName="active">Contact</NavLink></li>
        <li><NavLink exact to="/case" activeClassName="active">Cases</NavLink></li>
        <li><NavLink exact to="/indiacase" activeClassName="active">Cases in India</NavLink></li>
        </ul>
    </nav>
    </>)
}
export default Navigation;