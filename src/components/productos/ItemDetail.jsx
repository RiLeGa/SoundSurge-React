import React from 'react'
import PropTypes from 'prop-types'



function ItemDetail(id, descripcion, imagenes, titulo, precio, descuento, stock, marca) {
const img = `url('/images/${imagenes}')`
  return (
    < section className="sectionDetail">
       
        <div className="vistas">
            <ul>
                <li className="caja-secundarias">
                    <img className="secundarias"  src={`/images/${img}`} alt="Imagen secundaria" onclick={`document.getElementById('imgMain').setAttribute('src','/images/${img}')`}/>
                </li>
            </ul>
            <div className="detallado">
                <i className="fas fa-percentage"> {descuento} </i>
                <img className="principal"  id="imgMain" src={`/images/${img}`} alt="Imagen principal"/>
            </div>
        </div>
        <div className="detalle">
            <h3 className="marca"> {marca} </h3>
            <h3 className="titulo"> {titulo} </h3>
            <section className="caja-descripcion">
                <h2>descripcion</h2>
                <p className="descripcion"> {descripcion} </p>
            </section>
           
            <div className="precio-descuento">
                <p className="precio-detalle">{precio - (precio * descuento / 100)}</p>
                <p className="descuento">{precio}</p>
            </div>

            <div className="sumar-carrito">
                <input value= {stock}  id="stockOculto" />
                <div className="decrease" id="decrease">-</div>
                <input className="contador" type="number" id="contador" value="1"/>
                <div className="increase" id="increase">+</div>
            </div>

            <div className="agregar">
                <button className="a-carrito" type="submit" onClick={`addItem(${id})`}><a href="/productos/carrito">Agregar al carrito</a></button>
                <button className="a-carrito" id="carrito" type="submit"><a id="carrito" href="/"> Agregar al carrito</a></button>
            </div>
        </div>
        </section>
  )
}

itemDetail.propTypes = {
    id,
    descripcion,
    imagenes,
    titulo,
    precio,
    descuento,
    stock,
    marca
}

export default ItemDetail




