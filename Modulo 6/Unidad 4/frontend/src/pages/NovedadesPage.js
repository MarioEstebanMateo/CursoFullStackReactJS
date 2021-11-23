import React, { useState, useEffect } from 'react'
import NovedadItem from '../components/novedades/NovedadItem';
import '../styles/components/pages/NovedadesPage.css'
import axios from 'axios';

const NovedadesPage = (props) => {
    
    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState([]);

    useEffect(() => {
        const cargarNovedades = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/novedades');
            setNovedades(response.data);
            setLoading(false);
        };

        cargarNovedades();
    }, []);
    
    return (
        <main>
            <div>
                <div className="header">
                    <h2>Novedades</h2>
                </div>
                <div className="novedades">
                        {loading ? (
                            <p>Cargando...</p>
                        ) : (
                            novedades.map(item => 
                                <div className="tarjeta_novedades">
                                    <NovedadItem 
                                        key={item.id} 
                                        imagen={item.imagen} 
                                        titulo={item.titulo} 
                                        descripcion={item.descripcion} 
                                    />
                                </div>
                                )
                        )}

                        {/* <img src="img/Novedades/novedad1.jpg" alt=""/>
                        <h1>Slam Dunk #4</h1>
                        <p>Slam Dunk sigue a Hanamichi Sakuragi, un estudiante de secundaria que decide practicar baloncesto para conquistar a la chica de que está enamorado.</p> */}
                    
                </div>
            </div>
        </main>
    );
}

export default NovedadesPage;