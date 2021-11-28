import React from 'react'

import '../../styles/components/layout/Header.css'

const Header = (props) => {
    return (
        <header>
            <div class="logo_y_texto">
                <img src="img/logo.png" alt="Libreria El Socorro"/>
                <h1>Libreria El Socorro</h1>
            </div>
            <ul>
                <li><a className="boton_administrador" href="http://localhost:3000/admin/login" target="_blank" rel="noopener noreferrer"><i class="fas fa-users-cog"></i>  Administrador</a></li>
            </ul>
        </header>
    );
}

export default Header;