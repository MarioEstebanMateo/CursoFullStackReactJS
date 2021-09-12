import React from 'react'

import '../../styles/components/layout/Header.css'

const Header = (props) => {
    return (
        <header>
            <div class="logo_y_texto">
                <img src="img/logo.png" alt="Libreria El Socorro"/>
                <h1>Libreria El Socorro</h1>
            </div>
        </header>
    );
}

export default Header;