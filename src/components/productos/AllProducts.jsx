import React from 'react'
import React, { useState, useEffect } from 'react'

function AllProducts() {

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
    <main class="todosLosProductos">

        <h1 class="todos">Todos los productos</h1>

        <section class="busqueda">
         {/*  <!-- <form action="/busqueda" method="get"> --> */}
              <input type="text" name="search" id="inputSearch" placeholder="¿Que estas Buscando?"/>
        </section>
        <section class="busqueda">
                <div class="filtrado">
                    <ul class="list-result">
                      {/* <% productos.forEach(producto => { %> */}
                          <li class="producto-buscador">
                              <a href="/productos/detalle/<%= producto.id %>">
                                  <img class="imagen-filtrado" src="/images/<%= producto.imagenes[0].nombre %>" alt=""/>
                                  <h4>
                                  {/* <%-producto.titulo%> */}
                                  </h4>
                                  <div class="info-find">
                                  {/* <%= producto.category.nombre%>
                                  <%= producto.marca.nombre%>
                                  <%= producto.descripcion%> */}
                                  </div>
                                  <div class="agregar">
                                    <button class="a-favorito" type="submit">Agregar a favoritos</button>
                                    {/* <% if (locals.userLogin) { %> */}
                                      <button class="a-carrito" type="submit" onclick="addItem('<%= producto.id %>')"><a class="etiqueta-a" href="/productos/carrito">Agregar al carrito</a></button>
                                    {/* <% }else{ %> */}
                                        <button class="a-carrito" type="submit"><a href="#"> Agregar al carrito</a></button>
                                    {/* <% } %> */}
                                </div>
                              </a>
                          </li> 
                      {/* <% }) %> */}
                    </ul>
                </div>
        </section>

    </main>
  )
}

export default AllProducts