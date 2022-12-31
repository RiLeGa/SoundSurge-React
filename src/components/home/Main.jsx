import React from 'react'
import Article from './Article'

const Main =()=> {

    let productos = [
        {
            id : 1,
            imgProd : "ampli-marshal25-1.jpg",
            titulo : "Lorem ipsum dolor sit amet",
            precio : "150000"
        },
        {
            id : 2,
            imgProd : "ampli-marshal25-2.jpg",
            titulo : "Lorem ipsum dolor sit amet",
            precio : "150000"
        },
        {
            id : 3,
            imgProd : "ampli-marshal25-3.jpg",
            titulo : "Lorem ipsum dolor sit amet",
            precio : "150000"
        },
        {
            id : 4,
            imgProd : "ampli-marshal25-3.jpg",
            titulo : "Lorem ipsum dolor sit amet",
            precio : "150000"
        },
        {
            id : 5,
            imgProd : "ampli-marshal25-1.jpg",
            titulo : "Lorem ipsum dolor sit amet",
            precio : "150000"
        },
        {
            id : 6,
            imgProd : "ampli-marshal25-2.jpg",
            titulo : "Lorem ipsum dolor sit amet",
            precio : "150000"
        },
        {
            id : 7,
            imgProd : "ampli-marshal25-3.jpg",
            titulo : "Lorem ipsum dolor sit amet",
            precio : "150000"
        },
        {
            id : 8,
            imgProd : "ampli-marshal25-3.jpg",
            titulo : "Lorem ipsum dolor sit amet",
            precio : "150000"
        }
]



  return (
    <main>
            <div className="categorias-home">
                <h3 className="secciones"> Novedades </h3>
            </div>
            <section className='contenedor'>
            {productos.map((producto, index) => {
                return(
                <Article
                    key={index}
                    id={producto.id}
                    imgProd={producto.imgProd}
                    titulo={producto.titulo}
                    precio={producto.precio}
                />
                )
            })}
            </section>
            
            <div className="categorias-home">
                <h3 className="secciones"> Ofertas </h3>
            </div>
            <section className='contenedor'>
            {productos.map(producto => {
                return(
                <Article
                    key={producto.id}
                    id={producto.id}
                    imgProd={producto.imgProd}
                    titulo={producto.titulo}
                    precio={producto.precio}
                />
                )
            })}
            </section>

            

            <div className="categorias-home">
                <h3 className="secciones"> Surge Selection </h3>
            </div>
            <section className='contenedor'>
            {productos.map(producto => {
                return(
                <Article
                    key={producto.id}
                    id={producto.id}
                    imgProd={producto.imgProd}
                    titulo={producto.titulo}
                    precio={producto.precio}
                />
                )
            })}
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