import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

function AllProducts() {
  
    const [Productos, setProductos] = useState()
    const [tablaProductos, setTablaProductos] = useState()
    const [busqueda, setBusqueda] = useState()/* 
    const url = "http://localhost:4000/api/productos" */
    
    const fetchApi = async () => {
        await axios.get("http://localhost:4000/api/productos")
        .then(response =>{
          console.log(response.data)
          setProductos(response.data)
          setTablaProductos(response.data)
        })
        .catch(error=>{
          console.log(error)
        })
        /* const responseJSON = await response.json() */
    }

  const handleChange =e=>{
    setBusqueda(e.target.value);
     console.log("Busqueda: "+e.target.value);
  }

    
    useEffect(() => {
        fetchApi()
    }, [])

  return (
    <main className="todosLosProductos">

        <h1 className="todos">Todos los productos</h1>

        <section className="busqueda">
         
              <input 
                value={busqueda}
                placeholder="¿Que estas Buscando?"
                onChange={handleChange}
              />

        </section>
        <section className="busqueda">
                <div className="filtrado">
                    <ul className="list-result">
                    {!Productos ? "Cargando..." :
                       Productos.data.map(producto => { 
                        return(
                          <li className="producto-buscador">
                              <NavLink to={`/DetallesDeProducto/${producto.id}`}>
                                  <img className="imagen-filtrado"  id="imgMain" src={`/images/${producto.imagenes[0].nombre}`} alt="Imagen principal"/>
                                  <h4>{producto.titulo}</h4>
                  
                                  <div className="agregar">
                                    <button className="a-favorito" type="submit">Agregar a favoritos</button>
                                    
                                        <button className="a-carrito" type="submit"> Agregar al carrito</button>
                                   
                                </div>
                              </NavLink>
                          </li> 
                                 )})}
                    </ul>
                </div>
        </section>

    </main>
  )
}

export default AllProducts