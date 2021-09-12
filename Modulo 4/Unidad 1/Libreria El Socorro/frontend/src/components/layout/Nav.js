import React from 'react'

import '../../styles/components/layout/Nav.css'

const Nav = (props) => {
    return (
        <nav>
            <ul class="barra_navegacion">
                <li><a class="activo" href="index.html">Home</a></li>
                <li><a href="servicios.html">Servicios</a></li>
                <li><a href="novedades.html">Novedades</a></li>
                <li><a href="contacto.html">Contacto</a></li>
            </ul>
        </nav>
    );
}

export default Nav;