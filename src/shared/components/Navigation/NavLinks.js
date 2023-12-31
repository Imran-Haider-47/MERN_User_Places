import React from "react";
import { NavLink } from "react-router-dom";

import './NavLinks.css';

const NavLinks=()=>{
    return(
        <ul className="nav-links">
            <li>
                <NavLink to="/" exact>All Users</NavLink>
            </li>
            <li>
                <NavLink to="/U1/places">My Places</NavLink>
            </li>
            <li>
                <NavLink to="/places/new">Add New Place</NavLink>
            </li>
            <li>
                <NavLink to="/auth">Authenticate</NavLink>
            </li>

        </ul>
    )

}
export default NavLinks;