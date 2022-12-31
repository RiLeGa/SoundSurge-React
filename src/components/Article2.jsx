import React from 'react'
import PropTypes from 'prop-types'

function Article2({id,imgProd,titulo,precio}) {
    console.log(imgProd);
      return (
        <article>
            <a href={`/detalle/${id}`}>
                <div className="producto">
                    <img src={`../assets/${imgProd}`} alt="" />
                  <div className="precio-1">
                      <h3>{titulo}</h3>
                      <span >{precio}</span>
                  </div>
                </div>
            </a>
    </article>
      )
    }

Article2.propTypes = {
    id: PropTypes.number,
    imgProd: PropTypes.string,
    titulo: PropTypes.string,
    precio: PropTypes.string
}
Article2.defaultProps  = {
    id: 0,
    imgProd: "default-image.png",
    titulo: "Lorem ipsum dolor sit",
    precio: "$"
}

export default Article2
