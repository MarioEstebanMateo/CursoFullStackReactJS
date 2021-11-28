import React from 'react'

const NovedadItem = (props) => {
    const { titulo, descripcion, imagen, } = props;
    
    return (
        <div className="novedades">
            <img src={imagen} />
            <h1>{titulo}</h1>
            <p>{descripcion}</p>
        </div>
    )
}

export default NovedadItem
