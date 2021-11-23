import React from 'react'

import '../../styles/components/layout/Footer.css'

const Footer = (props) => {
    return (
        <footer>    
            <div className="footer1">
                <h4>Seguinos en nuestras redes!</h4>
                <a className="boton_redes" href="https://www.instagram.com/libreriaelsocorro" role="button"><i className="fab fa-instagram" target="_blank"></i></a>
                <a className="boton_redes" href="https://www.facebook.com/Libreria-El-Socorro-101095425635524" role="button"><i
                        className="fab fa-facebook-f" target="_blank"></i></a>
                <a className="boton_redes" href="https://twitter.com/libreriaelsoco1" role="button"><i className="fab fa-twitter" target="_blank"></i></a>
            </div>
            <div className="footer2">
                © 2021 Copyright: <a class="link_developer" href="https://www.instagram.com/marito0209">Diseño de Mario Esteban Mateo para Diplomatura Full Stack con React - UTN</a>
            </div>
        </footer>
    );
}

export default Footer;