import React, { useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'

const DetallesDeProducto = () => {
    
    const [Detalle, setDetalle] = useState()
    const params = useParams()

    const url = `http://localhost:4000/api/productos/detalle/${params.productId}`
    const fetchApi = async () => {
        const response = await fetch(url)
        const responseJSON = await response.json()
        setDetalle(responseJSON)
        console.log(responseJSON); 
    }
    
    useEffect(() => {
        fetchApi()
    })

  return (
    

      
    <main className="detalleDeProd">

        {!Detalle  ? 'Cargando...' :    
        Detalle.data.stock > 0 ?

        < section className="sectionDetail">
       
        <div className="vistas">
            <ul>
                <li className="caja-secundarias">
                    {Detalle.data.imagenes.map( img => {
                    return(
                    <img className="secundarias"  src={`/images/${img.nombre}`} alt="Imagen secundaria"/>
                    )})}
                </li>
            </ul>
            <div className="detallado">
                <i className="fas fa-percentage"> {Detalle.data.descuento} </i>
                <img className="principal"  id="imgMain" src={`/images/${Detalle.data.imagenes[0].nombre}`} alt="Imagen principal"/>
            </div>
        </div>
        <div className="detalle">
            <h3 className="marca"> {Detalle.data.marca.nombre} </h3>
            <h3 className="titulo"> {Detalle.data.titulo} </h3>
            <section className="caja-descripcion">
                <h2>descripcion</h2>
                <p className="descripcion"> {Detalle.data.descripcion} </p>
            </section>
           
            <div className="precio-descuento">
                <p className="precio-detalle">{Detalle.data.precio - (Detalle.data.precio * Detalle.data.descuento / 100)}</p>
                <p className="descuento">{Detalle.data.precio}</p>
            </div>

           {/*  <div className="sumar-carrito">
                <input value= {Detalle.data.stock}  id="stockOculto" />
                <div className="decrease" id="decrease">-</div>
                <input className="contador" type="number" id="contador" value="1"/>
                <div className="increase" id="increase">+</div>
            </div> */}

            <div className="agregar">
                {/* <button className="a-carrito" type="submit" onClick={`addItem(${Detalle.data.id})`}><a href="/productos/carrito">Agregar al carrito</a></button> */}
                <button className="a-carrito" id="carrito" type="submit"><a id="carrito" href="/"> Agregar al carrito</a></button>
            </div>
        </div>
        </section>
        
        :
        <section>
        <div className="sin-stock">
        <img src="/images/dinosaurio.png" alt=""/>
        <h3>Por el momento no hay stock de este producto.</h3>
        </div>
        <NavLink className="volvera" to='/' >volver al inicio</NavLink>
        </section>

        
        
        }
        
    </main>
        
)}
  


export default DetallesDeProducto