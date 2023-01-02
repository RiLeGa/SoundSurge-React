import React from 'react'
import PropTypes from 'prop-types'

function Article({id,titulo,precio}) {/* 
    console.log(imgProd); */
      return (
        <article>
            <a href={`/detalle/${id}`}>
                <div className="producto">
                <div /* style={{ backgroundImage: `url(../assets/${imgProd})` }} */>
                {/* <img src={`../assets/${imgProd}`} alt="" /> */}
                  <div className="precio-1">
                      <h3>{titulo}</h3>
                      <span >{precio}</span>
                  </div>
                  </div>
                </div>
            </a>
    </article>
      )
    }

Article.propTypes = {
    id: PropTypes.number,/* 
    imgProd: PropTypes.string, */
    titulo: PropTypes.string,
    precio: PropTypes.string
}
Article.defaultProps  = {
    id: 0,/* 
    imgProd: "default-image.png", */
    titulo: "Lorem ipsum dolor sit",
    precio: "$"
}

export default Article
