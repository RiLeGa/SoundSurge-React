import React, { useState, useEffect } from 'react'
import Article from './Article'

const Main = () => {

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
        <main>
            <div className="categorias-home">
                <h3 className="secciones"> Novedades </h3>
            </div>
            <section className='contenedor'>
           
                { !Productos ? 'Cargando...' :
                Productos.data.map( (producto => {
                    
                    return (
                       producto.id < 9 ?
                        <Article
                        key={producto.id}
                        id={producto.id}
                        titulo={producto.titulo}
                        imagenes={producto.imagenes[0].nombre}
                        precio={producto.precio}
                         />
                         :
                         null
                    )
                    
                }))}
            
            </section>
            

            <div className="categorias-home">
                <h3 className="secciones"> Ofertas </h3>
            </div>
            <section className='contenedor'>
           
           { !Productos ? 'Cargando...' :
           Productos.data.map( (producto => {
               
               return (
                  producto.id > 9 && producto.id < 18 ?
                   <Article
                   key={producto.id}
                   id={producto.id}
                   titulo={producto.titulo}
                   imagenes={producto.imagenes[0].nombre}
                   precio={producto.precio}
                    />
                    :
                    null
               )
               
           }))}
       
       </section>




            <div className="categorias-home">
                <h3 className="secciones"> Surge Selection </h3>
            </div>
            <section className='contenedor'>
           
           { !Productos ? 'Cargando...' :
           Productos.data.map( (producto => {
               
               return (
                  producto.id > 18 && producto.id < 27  ?
                   <Article
                   key={producto.id}
                   id={producto.id}
                   titulo={producto.titulo}
                   imagenes={producto.imagenes[0].nombre}
                   precio={producto.precio}
                    />
                    :
                    null
               )
               
           }))}
       
       </section>

            <section className="spots">
                <div className="video-1">
                    <iframe className="spot-1" src="https://www.youtube.com/embed/qfGggAGITwg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className="video-2">
                    <iframe className="spot-2" src="https://www.youtube.com/embed/Mi2iIqzdSD4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </section>
        </main>
    )
}

export default Main