import React from 'react';
import { NavLink } from 'react-router-dom';

// <NavLink to="/edit" activeClassName="btn btn-success"><button type="button" className="btn btn-primary">Edit</button></NavLink>
//<NavLink to="/session" activeClassName="btn btn-success"><button type="button" className="btn btn-primary">Start Session</button></NavLink>
const Header = () => (
    <header>
        <h1>Gone Fishing</h1>
        <NavLink to="/" activeClassName="btn btn-success" exact={true}><button type="button" className="btn btn-primary">Home</button></NavLink>
        
        <NavLink to="/location" activeClassName="btn btn-success"><button type="button" className="btn btn-primary">Start Session</button></NavLink>
        <NavLink to="/help" activeClassName="btn btn-success"><button type="button" className="btn btn-primary">Help</button></NavLink>
    </header>
);

export default Header;