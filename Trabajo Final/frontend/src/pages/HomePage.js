import React from 'react'

import '../styles/components/pages/HomePage.css'

const HomePage = (props) => {
    return (
        <main>
            <div className="bienvenida">
                <img src="img/Home/imagenhome.jpg"/>
                <h4>Bienvenidos a nuestra libreria</h4>
                <p>¿Querés comprar un libro, comic o manga?</p>
                <p>Hace clic en la seccion de novedades y enterate de todo lo nuevo, si no encontras tu lectura, te lo traemos por encargue y hacemos envíos a todo el país</p>
                <p>• Aceptamos todos los medios de pago •</p>
                <p>¿Querés saber más de nosotros? Somos una librería con historia. Recibimos y vendimos en sus primeras ediciones obras que hoy son consideradas de culto. Apostamos siempre por lo bueno, pero también por lo accesible. No queremos que el precio
                    no permita que, quien lo desee, pueda disfrutar de una buena obra. Es que somos, ante todo, lectores. Y trabajamos con los libros con el amor y el cuidado que sólo un lector puede tener</p>
                <p>Llevamos años en esto. Y entendemos que el libro en papel no va a desaparecer. Es fuerte. Pero, como también sabemos que el mundo cambia, decidimos abrir esta nueva ventana. Un gemelo virtual, un espejo de nuestra librería en internet</p>
            </div>

            <div className="nuestros_clientes">
                <h4>Testimonios de Nuestros Clientes</h4>
                <div className="clientes">
                    <div className="tarjeta">
                        <img src="img/Home/Cliente1.jpg" alt=""/>
                        <h1>Juan Garcia</h1>
                        <p>Me encanta la libreria! Compro comics de manera regular. Todo 10 puntos!</p>
                    </div>
                    <div className="tarjeta">
                        <img src="img/Home/Cliente2.jpeg" alt=""/>
                        <h1>Maria Iglesias</h1>
                        <p>Excelente libreria! Siempre me atienden de la mejor manera!</p>
                    </div>
                    <div className="tarjeta">
                        <img src="img/Home/Cliente3.jpg" alt=""/>
                        <h1>Pedro Diaz</h1>
                        <p>Siempre paso por Libreria El Socorro para ver las novedades! Y si no esta el manga que busco me lo traen a la semana!</p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default HomePage;