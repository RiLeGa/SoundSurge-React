import React, { useState, useEffect } from 'react'

const Main = () => {

    const url = "http://localhost:4000/api/productos"
    const [todos, setTodos] = useState()
    const fetchApi = async () => {
        const response = await fetch(url)
        const responseJSON = await response.json()
        setTodos(responseJSON)
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
           
                {!todos ? 'Cargando...' :
                todos.data.map((todo, index) => {
                    return (
                        
                        <article>
                            <a href={`/detalle/${todo.id}`}>
                                <div className="producto">
                                    <div style={{ backgroundImage: `url(../assets/${todo.imagenes})` }}>
                                        <div className="precio-1">
                                            <h3>{todo.titulo}</h3>
                                            <span >{todo.precio}</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </article>
                       

                    )
                })}
            
            </section>

            <div className="categorias-home">
                <h3 className="secciones"> Ofertas </h3>
            </div>




            <div className="categorias-home">
                <h3 className="secciones"> Surge Selection </h3>
            </div>

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