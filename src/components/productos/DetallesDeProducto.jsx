import React, { useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'


function DetallesDeProducto() {

    const params = useParams()

    const url = `http://localhost:4000/api/productos/detalle/${params.productId}`
    const [Detalle, setDetalle] = useState()
    const fetchApi = async () => {
        const response = await fetch(url)
        const responseJSON = await response.json()
        setDetalle(responseJSON)/* 
        console.log(responseJSON);  */
    }
    
    useEffect(() => {
        fetchApi()
    })

    

    
    
  
  return (
    

      
    <main className="detalleDeProd">

        {!Detalle  ? 'Cargando...' :    
        Detalle.data.stock > 0 ?
        <ItemDetail
        key={Detalle.data.id}
        id={Detalle.data.id}
        descripcion={Detalle.data.descripcion}
        imagenes={Detalle.data.imagenes}
        imagenes2={Detalle.data.imagenes[0].nombre}
        titulo={Detalle.data.titulo}
        precio={Detalle.data.precio}
        descuento={Detalle.data.descuento}
        stock={Detalle.data.stock}
        marca={Detalle.data.marca}    
        />
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