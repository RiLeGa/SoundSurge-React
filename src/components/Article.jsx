import React from 'react'

function Article({id,imgProd,titulo,precio}) {
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

export default Article