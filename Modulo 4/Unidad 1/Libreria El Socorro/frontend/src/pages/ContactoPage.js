import React from 'react'

import '../styles/components/pages/ContactoPage.css'

const ContactoPage = (props) => {
    return (
        <main>
            <div class="header">
                <h2>Contacto</h2>
            </div>
            <div class="contacto">
                <div class="vias_de_comunicacion">
                    <h4>Nuestras vias de comunicacion:</h4>
                    <ul>
                        <li>Fijo: 02477-495360</li>
                        <li>Movil: 2477-347640</li>
                        <li>Email:
                            <a href="mailto:libreriaelsocorro@gmail.com">libreriaelsocorro@gmail.com</a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/libreriaelsocorro"><i class="fab fa-instagram"></i> Instagram</a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/Libreria-El-Socorro-101095425635524"><i class="fab fa-facebook-f"></i> Facebook</a>
                        </li>
                        <li>
                            <a href="https://twitter.com/libreriaelsoco1"><i class="fab fa-twitter"></i> Twitter</a>
                        </li>
                    </ul>
                </div>
                <div class="mapa">
                    <h4>Nuestra Ubicacion</h4>
                    <div>
                        <iframe title="Ubicacion Libreria El Socorro" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.8568717138614!2d-60.711619485229036!3d-33.66087031572737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b8293d28ee2d9d%3A0xab1044b5d3919ba7!2sLorenzo%20Moreno%201040%2C%20Villa%20Ang%C3%A9lica%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1630817032091!5m2!1ses!2sar"></iframe>
                    </div>
                </div>
                <div class="formulario">
                    <h4>Dejanos tu consulta:</h4>
                    <form action="">
                        <div class="nombre">
                            <label for="nombre">Nombre</label>
                            <input type="text" name="nombre" id="nombre"/>
                        </div>
                        <div class="telefono">
                            <label for="telefono">Telefono</label>
                            <input type="number" name="telefono" id="telefono"/>
                        </div>
                        <div class="email">
                            <label for="email">E-Mail</label>
                            <input type="email" name="email" id="email"/>
                        </div>
                        <div class="consulta">
                            <label for="consulta">Consulta</label>
                            <textarea name="consulta" id="consulta" cols="30" rows="5"></textarea>
                        </div>
                        <div class="enviar">
                            <input type="submit" value="Enviar"/>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}

export default ContactoPage;