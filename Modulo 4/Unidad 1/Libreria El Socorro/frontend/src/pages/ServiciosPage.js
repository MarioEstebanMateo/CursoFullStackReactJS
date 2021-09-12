import React from 'react'

import '../styles/components/pages/ServiciosPage.css'

const ServiciosPage = (props) => {
    return (
        <main>
            <div>
                <div className="header">
                    <h2>Nuestros Servicios</h2>
                </div>
                <div className="servicios">
                    <div className="servicio">
                        <img src="img/Servicios/servicios1.jpg" alt=""/>
                        <h4 className="servicio_h4">Venta en Local Comercial</h4>
                        <p>Contamos con personal especializado para brindarte un correcto asesoramiento</p>
                        <p>Para hacer tu estadia mas comoda, contamos con servicio de cafeteria <i className="fas fa-coffee"></i></p>
                    </div>
                    <div className="servicio">
                        <img src="img/Servicios/servicios2.jpeg" alt=""/>
                        <h4 className="servicio_h4">Venta Telefonica</h4>
                        <p>Podes hacernos tu pedido telefonicamente comunicandote al <i className="fas fa-phone"></i> 02477-495082</p>
                    </div>
                    <div className="servicio">
                        <img src="img/Servicios/servicios3.jpeg" alt=""/>
                        <h4 className="servicio_h4">Envios a todo el pais</h4>
                        <p>Hacemos envios a todo el pais <i className="fas fa-truck"></i></p>
                        <p>En tu consulta decinos tu codigo postal para brindarte un correcto asesoramiento</p>
                        <p>Mira en nuestra seccion <a href="novedades.html">Novedades</a> por promociones</p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default ServiciosPage;