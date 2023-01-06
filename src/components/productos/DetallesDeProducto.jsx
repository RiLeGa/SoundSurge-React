import React, { useState, useEffect } from 'react'


function DetallesDeProducto(id,imagenes) {
    const url = `http://localhost:4000/api/productos/detalle/${id}`
    const [Detalles, setDetalles] = useState()
    const fetchApi = async () => {
        const response = await fetch(url)
        const responseJSON = await response.json()
        setDetalles(responseJSON)
        console.log(responseJSON);
    }
    
    useEffect(() => {
        fetchApi()
    }, [])

    const img = `url('/images/${imagenes}')`

  return (
    <main class="detalleDeProd">
        <h2>Hola</h2>
     
        {/*< section class="sectionDetail">
       
        <div class="vistas">
            <ul>
                <li class="caja-secundarias">
                     {Detalles.data.map(imagen =>{
                        return(
                        <img class="secundarias"  src={`/images/${img}`} alt="Imagen secundaria" onclick={`document.getElementById('imgMain').setAttribute('src','/images/${img}')`}/>)})}
                </li>
            </ul>
            <div class="detallado">
                 {Detalles.data[id].descuento !== 0 ? 
                <i class="fas fa-percentage"> {Detalles.data.descuento} </i>
                :
                null
                 }
                <img class="principal"  id="imgMain" src="/images/ producto.imagenes[0].nombre " alt="Imagen principal"/>
            </div>
        </div>
        <div class="detalle">
            <h4 class="titulo"> {Detalles.data.marca.nombre} </h4>
            <h3 class="marca"> {Detalles.data.titulo} </h3>
            <section class="caja-descripcion">
                <h2>descripcion</h2>
                <p class="descripcion"> {Detalles.data.descripcion} </p>
            </section>
           
            <div class="precio-descuento">
                <p class="precio-detalle">{Detalles.data.precio - (Detalles.data.precio * Detalles.data.descuento / 100)}</p>
                Detalles.data.descuento !== 0 ? 
                    <p class="descuento">{Detalles.data.precio}</p>   
                    
            </div>

            <div class="sumar-carrito">
                <input value=" producto.stock " id="stockOculto" />
                <div class="decrease" id="decrease">-</div>
                <input class="contador" type="number" id="contador" value="1"/>
                <div class="increase" id="increase">+</div>
            </div>

            <div class="agregar">
                <button class="a-carrito" type="submit" onclick="addItem(' producto.id ')"><a href="/productos/carrito">Agregar al carrito</a></button>
                <button class="a-carrito" id="carrito" type="submit"><a id="carrito" href="/"> Agregar al carrito</a></button>
            </div>
        </div>
    </section>
    :
    <div class="sin-stock">
    <img src="/images/dinosaurio.png" alt=""/>
    <h3>Por el momento no hay stock de este producto.</h3>
    </div>
    <h4 class="volver"><a class="volvera" href="/">volver al inicio</a></h4> */}

</main>
  )}
  


export default DetallesDeProducto