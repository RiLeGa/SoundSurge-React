import React from 'react'
import PropTypes from 'prop-types'/* 
import { useParams } from 'react-router-dom' */

import { NavLink } from 'react-router-dom'


function Article({id,titulo, imagenes, precio}) {
  /* const params = useParams() */
  const img = `url('/images/${imagenes}')`
  console.log(img)

      return (
        <article>
            <NavLink to={`/DetallesDeProducto/${id}`}>
                {/* <div > */}
                <div className="producto" style={{ backgroundImage: img}}></div>
                {/* <img src={`../assets/${imgProd}`} alt="" /> */}
                  <div className="precio-1">
                      <h3>{titulo}</h3>
                      <span >{precio}</span>
                  </div>
                {/* </div> */}
            </NavLink>
    </article>
      )
    }

Article.propTypes = {
    id: PropTypes.number,
    imagenes: PropTypes.string,
    titulo: PropTypes.string,
    precio: PropTypes.number
}
Article.defaultProps  = {
    id: 0,
    imagenes: "default-image.png",
    titulo: "Lorem ipsum dolor sit",
    precio: 0
}

export default Article
