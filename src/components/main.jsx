import React from 'react'
import header  from "./header";

const Main =()=> {
  return (
    <main>
            <div class="categorias-home">
                <h3 class="secciones"> Novedades </h3>
            </div>
            
            
            <div class="categorias-home">
                <h3 class="secciones"> Ofertas </h3>
            </div>
            

            

            <div class="categorias-home">
                <h3 class="secciones"> Surge Selection </h3>
            </div>
                
         <section class="spots">
            <div class="video-1">
                <iframe class="spot-1" src="https://www.youtube.com/embed/qfGggAGITwg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div class="video-2">
                <iframe class="spot-2" src="https://www.youtube.com/embed/Mi2iIqzdSD4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </section> 
    </main>
  )
}

export default Main