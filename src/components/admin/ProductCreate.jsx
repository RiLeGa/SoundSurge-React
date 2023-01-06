import React from 'react'

function ProductCreate() {
  return (
    <h2>hola</h2>
   /*  <main className="crear">
                <a className="direct-lista" href="/admin/lista">
                    <button type="button" id="boton" className="btn btn-primary">Lista de productos</button>
                </a>
                <a className="direct-lista-flecha" href="/admin/lista">
                    <i className="fa-solid fa-arrow-left"></i>
                </a>
                <h2>Crear Producto</h2>
                    <form id="formulario" action="/admin/crear" method="post" encType="multipart/form-data">
                        <section className="cajita">
                            <section>
                                <article className="articulo1">
                                    <div className="caja1">

                                        <div className="mb-3">
                                            <label htmlFor="marcas" className="form-label">MARCAS</label>
                                            <select className="form-select" id="marcas" name="marcas"
                                                aria-label="select example">
                                                    <option hidden value="">Selecciona una opcion</option>
                                                        {marcas.map(marcas=> {  
                                                         marcas.id==old.marcas ?
                                                            <option value=" marcas.id " selected>
                                                                 marcas.nombre 
                                                            </option>
                                                            })}

                                            </select>
                                            <p className="error" id="marcaError">
                                            </p>
                                        </div>
                                        <div className="mb-3" id="contenedores">
                                            <label htmlFor="titulo" className="form-label">titulo</label>
                                            <input type="text" name="titulo" className="form-control" id="titulo"
                                                value=" locals.old && old.titulo ? old.titulo : null"
                                                placeholder="Ingrese marca del producto"/>
                                            <p className="error" id="tituloError">
                                            </p>
                                        </div>
                                    </div>
                                    <div className="caja2">
                                        <div className="mb-3" id="contenedores">
                                            <label htmlFor="precio" className="form-label">precio</label>
                                            <input type="number" name="precio" className="form-control"
                                                value=" locals.old && old.precio ? old.precio : null" id="precio"
                                                placeholder="Ingrese precio del producto"/>
                                            <p className="error" id="precioError">
                                            </p>
                                        </div>
                                        <div className="mb-3" id="contenedores">
                                            <label htmlFor="descuento" className="form-label">descuento</label>
                                            <input type="number" name="descuento" className="form-control" id="descuento"
                                                value=" locals.old && old.descuento ? old.descuento : null"
                                                placeholder="Ingrese su descuento"/>
                                            <p className="error" id="descuentoError">
                                             
                                            </p>
                                        </div>
                                    </div>
                                </article>
                                <article className="articulo2">
                                    <div className="caja33" id="desaparecer">
                                        <div className="mb-3" id="descripcion">
                                            <label htmlFor="descripcion" className="form-label">Descripcion</label>

                                            <textarea
                                                value=" locals.old && old.descripcion ? old.descripcion : null"
                                                name="descripcion" id="descripcion" cols="1" rows="6"
                                                className="form-control" placeholder="Ingrese descripcion"
                                                style="resize: none;"></textarea>
                                            <p className="error" id="descripcionError">
                                              
                                            </p>
                                        </div>
                                    </div>
                                    <div className="caja3">
                                        <div className="mb-3" id="contenedores">
                                            <label htmlFor="stock" className="form-label">stock</label>
                                            <input type="number" name="stock" className="form-control" id="stock"
                                                value=" locals.old && old.stock ? old.stock : null"
                                                placeholder="stock disponible"/>
                                            <p className="error" id="stockError">
                                            </p>
                                        </div>

                                        <div className="mb-3" id="contenedores">
                                            <label htmlFor="categorias" className="form-label">categorias</label>
                                            <select className="form-select" name="categorias" id="categorias"
                                                aria-label="select example">
                                                    <option hidden value="">Selecciona una opcion</option>
                                                    <% categorias.forEach(categorias=> { 
                                                        <% if (categorias.id==old.categorias) { 
                                                            <option value=" categorias.id " selected>
                                                                 categorias.nombre 
                                                            </option>
                                                             <% }  
                                                                <option value=" categorias.id ">
                                                                     categorias.nombre 
                                                                </option>
                                                                 <% })
                                                                     <% }else{
                                                                        <option selected hidden value="">Selecciona una
                                                                            opcion</option>
                                                                         <% categorias.forEach(categoria=> {
                                                                            <option value=" categoria.id ">
                                                                                categoria.nombre 
                                                                            </option>
                                                                             <% })
                                                                                 <% }
                                            </select>
                                            <p className="error" id="categoriaError">
                                                  locals.errors && errors.categorias ? errors.categorias.msg : null
                                            </p>
                                        </div>
                                    </div>
                                    </div>

                                </article>

                            </section>

                            <section className="section-imagenes">

                                <div className="divisor-label"> 
                                <label className="mb-3" htmlFor="imagen">
                                    <label htmlFor="imagen" className="form-label">imagen 1</label>
                                    <input type="file" className="form-control" id="imagen" name="imagen"
                                        aria-label="file example"/>
                                        <img  style="background-image:url('/images/Color-negro.jpg')" id="img-preview" alt="" className="img-crear"/>
                                    <p className="error" id="imagenError">
                                          locals.errors && errors.imagen ? errors.imagen.msg : null
                                    </p>
                                </label>
                                <label className="mb-3" htmlFor="imagen2">
                                    <label htmlFor="imagen2" className="form-label">imagen 2</label>
                                    <input type="file" className="form-control" id="imagen2" name="imagen"
                                        aria-label="file example"/>
                                        <img style="background-image:url('/images/Color-negro.jpg')" id="sub-img-preview-1" alt="" className="img-crear"/>
                                    <p className="error" id="imagenError2">
                                          locals.errors && errors.imagen ? errors.imagen.msg : null
                                    </p>
                                </label> 
                                </div>
                                <div className="divisor-label"> 
                                <label className="mb-3" htmlFor="imagen3">
                                    <label htmlFor="imagen3" className="form-label">imagen 3</label>
                                    <input type="file" className="form-control" id="imagen3" name="imagen"
                                        aria-label="file example"/>
                                        <img style="background-image:url('/images/Color-negro.jpg')" id="sub-img-preview-2" alt="" className="img-crear"/>
                                    <p className="error" id="imagenError3">
                                          locals.errors && errors.imagen ? errors.imagen.msg : null
                                    </p>
                                </label>
                                <label className="mb-3" htmlFor="imagen4">
                                    <label htmlFor="imagen4" className="form-label">imagen 4</label>
                                    <input type="file" className="form-control" id="imagen4" name="imagen"
                                        aria-label="file example"/>
                                        <img style="background-image:url('/images/Color-negro.jpg')" id="sub-img-preview-3" alt="" className="img-crear"/>
                                    <p className="error" id="imagenError4">
                                          locals.errors && errors.imagen ? errors.imagen.msg : null
                                    </p>
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
                
            </main> */
  )
}

export default ProductCreate