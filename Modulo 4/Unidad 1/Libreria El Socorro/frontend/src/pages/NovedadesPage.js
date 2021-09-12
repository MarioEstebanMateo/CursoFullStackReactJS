import React from 'react'

import '../styles/components/pages/NovedadesPage.css'

const NovedadesPage = (props) => {
    return (
        <main>
            <div>
                <div class="header">
                    <h2>Novedades</h2>
                </div>
                <div class="novedades">
                    <div class="tarjeta_novedades">
                        <img src="img/Novedades/novedad1.jpg" alt=""/>
                        <h1>Slam Dunk #4</h1>
                        <p>Slam Dunk sigue a Hanamichi Sakuragi, un estudiante de secundaria que decide practicar baloncesto para conquistar a la chica de que está enamorado.</p>
                    </div>
                    <div class="tarjeta_novedades">
                        <img src="img/Novedades/novedad2.jpg" alt=""/>
                        <h1>Captain Tsubasa #6</h1>
                        <p>La historia tiene como tema central el fútbol, narrando las intrépidas aventuras de Tsubasa Ōzora y sus amigos.</p>
                    </div>
                    <div class="tarjeta_novedades">
                        <img src="img/Novedades/novedad3.jpg" alt=""/>
                        <h1>Haikyu!! #5</h1>
                        <p>Es la historia de Shōyō Hinata, que ve un partido de voleibol por la televisión, y desde entonces, desea convertirse en profesional.</p>
                    </div>
                    <div class="tarjeta_novedades">
                        <img src="img/Novedades/novedad4.jpg" alt=""/>
                        <h1>Dragon Ball Saga Piccolo #4</h1>
                        <p>Su trama describe las aventuras de Gokū, un guerrero saiyajin, cuyo fin es proteger a la Tierra de otros seres que quieren conquistarla y exterminar a la humanidad.</p>
                    </div>
                    <div class="tarjeta_novedades">
                        <img src="img/Novedades/novedad5.jpg" alt=""/>
                        <h1>One Piece #24</h1>
                        <p>One Piece es una aventura de piratas. Es la historia de un chico llamado Monkey D. Luffy, que sale al mar para convertirse en el Rey de los Piratas.</p>
                    </div>
                    <div class="tarjeta_novedades">
                        <img src="img/Novedades/novedad6.jpg" alt=""/>
                        <h1>Saint Seiya #3 Edicion Kanzenban</h1>
                        <p>Es la historia de un grupo de jóvenes guerreros denominados «caballeros», quienes luchan por proteger a la diosa griega Atenea de las fuerzas del mal que quieren dominar la Tierra.</p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default NovedadesPage;