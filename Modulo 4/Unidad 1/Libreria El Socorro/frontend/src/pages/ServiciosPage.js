import React from 'react'

import '../styles/components/pages/ServiciosPage.css'

const ServiciosPage = (props) => {
    return (
        <main>
            <div>
                <div class="header">
                    <h2>Nuestros Servicios</h2>
                </div>
                <div class="servicios">
                    <div class="servicio">
                        <img src="img/Servicios/servicios1.jpg" alt=""/>
                        <h4 class="servicio_h4">Venta en Local Comercial</h4>
                        <p>Contamos con personal especializado para brindarte un correcto asesoramiento</p>
                        <p>Para hacer tu estadia mas comoda, contamos con servicio de cafeteria <i class="fas fa-coffee"></i></p>
                    </div>
                    <div class="servicio">
                        <img src="img/Servicios/servicios2.jpeg" alt=""/>
                        <h4 class="servicio_h4">Venta Telefonica</h4>
                        <p>Podes hacernos tu pedido telefonicamente comunicandote al <i class="fas fa-phone"></i> 02477-495082</p>
                    </div>
                    <div class="servicio">
                        <img src="img/Servicios/servicios3.jpeg" alt=""/>
                        <h4 class="servicio_h4">Envios a todo el pais</h4>
                        <p>Hacemos envios a todo el pais <i class="fas fa-truck"></i></p>
                        <p>En tu consulta decinos tu codigo postal para brindarte un correcto asesoramiento</p>
                        <p>Mira en nuestra seccion <a href="novedades.html">Novedades</a> por promociones</p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default ServiciosPage;