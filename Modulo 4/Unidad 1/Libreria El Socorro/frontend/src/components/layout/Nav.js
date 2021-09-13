import React from 'react'
import { NavLink } from 'react-router-dom'

import '../../styles/components/layout/Nav.css'

const Nav = (props) => {
    return (
        <nav>
            <ul className="barra_navegacion">
                <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                <li><NavLink to="/servicios" activeClassName="active">Servicios</NavLink></li>
                <li><NavLink to="/novedades" activeClassName="active">Novedades</NavLink></li>
                <li><NavLink to="/contacto" activeClassName="active">Contacto</NavLink></li>
            </ul>
        </nav>
    );
}

export default Nav;