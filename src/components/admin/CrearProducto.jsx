import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

function CrearProducto() {

        const url = "http://localhost:4000/api/productos/marcas"
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
    <section className="crear">
                <NavLink className="direct-lista" to="/Admin">
                    <button type="button" id="boton" className="btn btn-primary">Lista de productos</button>
                </NavLink>
                <h2>Crear Producto</h2>

                <section>
                    <form id="formulario" action="/admin/crear/producto" method="post" encType="multipart/form-data">
                        <section className="cajita">
                            <section>
                                <article className="articulo1">
                                    <div className="caja1">

                                        <div className="mb-3">
                                            <label htmlFor="marcas" className="form-label">MARCAS</label>
                                            <select className="form-select" id="marcas" name="marcas"
                                                aria-label="select example">
                                                    <option hidden value="">Selecciona una opcion</option>
                                                         {!Listado ? "Cargando..." :
                                                         Listado.data.map(marca=> { 
                                                                <option value={`${marca.id}`}>
                                                                    {marca.nombre} 
                                                                </option>
                                                                })} 
                                            </select>
                                            
                                        </div>
                                        <div className="mb-3" id="contenedores">
                                            <label htmlFor="titulo" className="form-label">titulo</label>
                                            <input type="text" name="titulo" className="form-control" id="titulo"
                                               
                                                placeholder="Ingrese marca del producto"/>
                            
                                        </div>
                                    </div>
                                    <div className="caja2">
                                        <div className="mb-3" id="contenedores">
                                            <label htmlFor="precio" className="form-label">precio</label>
                                            <input type="number" name="precio" className="form-control"
                                               
                                                placeholder="Ingrese precio del producto"/>
                                            
                                        </div>
                                        <div className="mb-3" id="contenedores">
                                            <label htmlFor="descuento" className="form-label">descuento</label>
                                            <input type="number" name="descuento" className="form-control" id="descuento"
                                               
                                                placeholder="Ingrese su descuento"/>
                                           
                                        </div>
                                    </div>
                                </article>
                                <article className="articulo2">
                                    <div className="caja33" id="desaparecer">
                                        
                                    </div>
                                    <div className="caja3">
                                        <div className="mb-3" id="contenedores">
                                            <label htmlFor="stock" className="form-label">stock</label>
                                            <input type="number" name="stock" className="form-control" id="stock"
                                               
                                                placeholder="stock disponible"/>
                                            
                                        </div>

                                        <div className="mb-3" id="contenedores">
                                            <label htmlFor="categorias" className="form-label">categorias</label>
                                            <select className="form-select" name="categorias" id="categorias"
                                                aria-label="select example">
                                                    <option hidden /* value="" */>Selecciona una opcion</option>
                                                    {!Listado ? "Cargando..." :
                                                    Listado.data.map(categoria => { 
                                                            <option value={`${categoria.id}`} selected>
                                                                {categoria.nombre}
                                                            </option>})}
                                            </select>
                                    
                                        </div>
                                    </div>

                                </article>

                            </section>

                            <div className="mb-3" id="descripcion">
                                            <label htmlFor="descripcion" className="form-label">Descripcion</label>

                                            <textarea
                                                /* value="" */
                                                name="descripcion" id="descripcion" cols="1" rows="6"
                                                className="form-control" placeholder="Ingrese descripcion"
                                                style={{resize: "none"}}>
                                            </textarea>
                                           
                                        </div>

                            <section className="section-imagenes">

                                <div className="divisor-label"> 
                                <label className="mb-3" htmlFor="imagen">
                                    <label htmlFor="imagen" className="form-label">imagen 1</label>
                                    <input type="file" className="form-control" id="imagen" name="imagen"
                                        aria-label="file example"/>
                                        {/* <img  style="background-image:url('/images/Color-negro.jpg')" id="img-preview" alt="" className="img-crear"/> */}
                                    
                                </label>
                                <label className="mb-3" htmlFor="imagen2">
                                    <label htmlFor="imagen2" className="form-label">imagen 2</label>
                                    <input type="file" className="form-control" id="imagen2" name="imagen"
                                        aria-label="file example"/>
                                        {/* <img style="background-image:url('/images/Color-negro.jpg')" id="sub-img-preview-1" alt="" className="img-crear"/> */}
                                    
                                </label> 
                                </div>
                                <div className="divisor-label"> 
                                <label className="mb-3" htmlFor="imagen3">
                                    <label htmlFor="imagen3" className="form-label">imagen 3</label>
                                    <input type="file" className="form-control" id="imagen3" name="imagen"
                                        aria-label="file example"/>
                                      {/*   <img style="background-image:url('/images/Color-negro.jpg')" id="sub-img-preview-2" alt="" className="img-crear"/> */}
                                    
                                </label>
                                <label className="mb-3" htmlFor="imagen4">
                                    <label htmlFor="imagen4" className="form-label">imagen 4</label>
                                    <input type="file" className="form-control" id="imagen4" name="imagen"
                                        aria-label="file example"/>
                                        {/* <img style="background-image:url('/images/Color-negro.jpg')" id="sub-img-preview-3" alt="" className="img-crear"/> */}
                                  
                                </label>
                                </div>
                            </section>
                        </section>
                        
                            


                            <div className="botones">
                                <div className="boton">
                                <button className="btn btn-primary" id='#btn-submit' type="submit">Confirma</button>
                            </div>
                            <div className="boton">
                                <button className="btn btn-secundary" type="reset"><a
                                        href="/admin/lista">Cancelar</a></button>
                                    </div>
                            </div>

                    </form>
                </section>
                
            </section>
  )
}

export default CrearProducto