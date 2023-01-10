import React, { useState, useEffect } from 'react'

function LoMasVendido() {

    const url = "http://localhost:4000/api/productos"
    const [Productos, setProductos] = useState()
    
    const fetchApi = async () => {
        const response = await fetch(url)
        const responseJSON = await response.json()
        setProductos(responseJSON)
        console.log(responseJSON);
    }
    
    useEffect(() => {
        fetchApi()
    }, [])

  return (
    <main class="loMas">
        <div class="categorias-home">
            <h3> Lo + Vendido </h3>
        </div>

        <section class="contenedor">
                
                <div class="filtrado">
                 
                    <ul class="list-result">

                      {!Productos ? "Cargando..." :
                       Productos.data.map(producto => { 
                        return(
                        producto.stock > 0 && producto.stock <= 10 ?
                          <li class="producto-buscador">
                            <div class="loMasV" >
                              <img src="/images/100Quality.png" alt=""/>
                            </div>
                            <a href="/productos/detalle/ producto.id ">
                              <img class="imagen-filtrado" id="imgMain" src={`/images/${producto.imagenes[0].nombre}`} alt="Imagen principal"/>
                              <h4>{producto.titulo}</h4>
                              <div class="agregar">
                                <button class="a-favorito" type="submit">Agregar a favoritos</button>
                                
                                    <button class="a-carrito" type="submit"> Agregar al carrito</button>
                            
                                  </div>
                              </a>
                          </li> 
                          :
                          null
                          )})}
                     
                    </ul>
                </div>

        </section>
        
    </main>
  )
}

export default LoMasVendido