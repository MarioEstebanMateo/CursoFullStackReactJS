import React from 'react'

import '../../styles/components/layout/Footer.css'

const Footer = (props) => {
    return (
        <footer>
            <div class="footer1">
                <a class="boton_redes" href="https://www.instagram.com/libreriaelsocorro" role="button"><i class="fab fa-instagram"></i></a>
                <a class="boton_redes" href="https://www.facebook.com/Libreria-El-Socorro-101095425635524" role="button"><i
                        class="fab fa-facebook-f"></i></a>
                <a class="boton_redes" href="https://twitter.com/libreriaelsoco1" role="button"><i class="fab fa-twitter"></i></a>
            </div>
            <div class="footer2">
                © 2021 Copyright: <a class="link_developer" href="index.html">Diseño de Mario Esteban Mateo para Diplomatura Full Stack con React - UTN</a>
            </div>
        </footer>
    );
}

export default Footer;