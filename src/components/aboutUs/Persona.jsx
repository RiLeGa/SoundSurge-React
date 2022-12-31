import React from 'react'
import PropTypes from 'prop-types'

function Persona(props) {
    return (
        <div className="card-lean">
            <img src={`../assets/videos/${props.imagen}`} alt={props.alt} />
            <h2>About {props.nombre}</h2>
            <p>
               <span>Edad: {props.edad}</span>
               <span>Localidad: {props.localidad}</span>
               <span>Talento: {props.talento}</span>
            </p>
        </div>
    )
}

Persona.propTypes = {
    imagen: PropTypes.string,
    nombre:PropTypes.string,
    edad:PropTypes.string,
    localidad:PropTypes.string,
    talento:PropTypes.string,
    alt:PropTypes.string
}
Persona.defaultProps = {
    imagen: "default-image.png" ,
    nombre: "SuperSurge",
    edad: "0",
    localidad: "Never-Land",
    talento: "hacerme invisible",
    alt: "no hay nada que ver"
}

export default Persona
