import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function ProductList() {

    const url = "http://localhost:4000/api/productos"
    const [Listado, setListado] = useState()
    
    const fetchApi = async () => {
        const response = await fetch(url)
        const responseJSON = await response.json()
        setListado(responseJSON)
        console.log(responseJSON);
    }
    
    useEffect(() => {
        fetchApi()
    }, [])

  return (
    <main className="lista">
        <h1>Lista de productos</h1>

        
          <NavLink to="crear/producto">
            <Stack spacing={2} direction="row">
              <Button variant="contained">Crear un producto</Button>
            </Stack>
          </NavLink>
        
    
    <section className="busqueda">
      <i className="fas fa-search" id="lupa"></i> <input type="text" name="search" id="inputSearch" placeholder="¿Que estas Buscando?"/>
    </section>
        <div className="table-responsive">
        <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th className="category" scope="col">categoria</th>
                <th id="marca" scope="col">Marca</th>
                <th scope="col">stock</th>
                <th scope="col">Precio</th>
                <th scope="col" className="desc">Des</th>
                <th scope="col">Accion</th>
              </tr>
            </thead>
            <tbody>
              
                 {!Listado ? 'Cargando...' :
                 Listado.data.map(producto => {
                    return(
                    producto.stock === 0 ?
                 
                  <tr id="producto-buscador2" className="producto-buscador">
                      
                        <th scope="row"><NavLink to={`/DetallesDeProducto/${producto.id}`}> {producto.id}  </NavLink></th>
                        <td className="titulo-nombre"><NavLink to={`/DetallesDeProducto/${producto.id}`}> {producto.titulo} </NavLink></td>
                        <td className="category"><NavLink to={`/DetallesDeProducto/${producto.id}`}> {producto.category.nombre} </NavLink></td>
                        <td id="marca"><NavLink to={`/DetallesDeProducto/${producto.id}`}> {producto.marca.nombre} </NavLink></td>
                        <td id="stock"><NavLink to={`/DetallesDeProducto/${producto.id}`}> {producto.stock} </NavLink></td>
                        <td><NavLink to={`/DetallesDeProducto/${producto.id}`}> {producto.precio} </NavLink></td>
                        <td className="desc"><NavLink to={`/DetallesDeProducto/${producto.id}`}> {producto.descuento} </NavLink></td>
                        <td>
                            <div className="edicion">
                                <a href="/admin/editar/ producto.id">
                                    <button type="button" className="btn btn-success"><i className="fas fa-edit"></i></button>
                                </a>
                                <form id="formula" action="/admin/borrar/ producto.id?_method=DELETE" method="post">
                                  <button type="submit" id="eliminar-producto" className="btn btn-danger"><i className="fas fa-trash-alt"></i></button>
                                </form>
                            </div>
                        </td>
                      
                      </tr>

                       :

                        <tr className="producto-buscador">
                      
                          <th  scope="row"><NavLink to={`/DetallesDeProducto/${producto.id}`}> {producto.id}  </NavLink></th>
                          <td   className="titulo-nombre"><NavLink to={`/DetallesDeProducto/${producto.id}`}> {producto.titulo} </NavLink></td>
                          <td  className="category"><NavLink to={`/DetallesDeProducto/${producto.id}`}> {producto.category.nombre} </NavLink></td>
                          <td id="marca"><NavLink to={`/DetallesDeProducto/${producto.id}`}> {producto.marca.nombre} </NavLink></td>
                          <td ><NavLink to={`/DetallesDeProducto/${producto.id}`}> {producto.stock} </NavLink></td>
                          <td ><NavLink to={`/DetallesDeProducto/${producto.id}`}> {producto.precio} </NavLink></td>
                          <td  className="desc"><NavLink to={`/DetallesDeProducto/${producto.id}`}> {producto.descuento} </NavLink></td>
                          <td >
                              <div className="edicion">
                                  <a href="/admin/editar/ producto.id">
                                      <button type="button" className="btn btn-success"><i className="fas fa-edit"></i></button>
                                  </a>
                                  <form id="formula" action="/admin/borrar/ producto.id?_method=DELETE" method="post">
                                    <button type="submit" id="eliminar-producto" className="btn btn-danger"><i className="fas fa-trash-alt"></i></button>
                                  </form>
                              </div>
                          </td>
                        
                        </tr>
            )})}    
                
            </tbody>
          </table>
        </div>
    </main>
  )
}

export default ProductList