import React from 'react'

function AboutUs() {
  return (
    <main className="aboutSound">
            <h1>Somos SoundSurge</h1>
            <section>
                <p>SoundSurge fue fundada en 2022 con un objetivo en mente: poner los medios necesarios para producir música al alcance de la mano de los músicos. Desde el primer día que escuchamos a nuestros clientes sobr/e sus necesidades, sus deseos y sus sueños, y con esa información estuvimos proveyéndonos de productos que nunca habían llegado a nuestro mercado local.
                    Los tiempos cambian, y los músicos también, así que constantemente debemos estar allí con los últimos avances de la tecnología en instrumentos y dispositivos de sonido. SoundSurge quiere darte las herramientas que necesitas para llevar la música que tienes dentro de tu cabeza a nuestros oídos. 
                     </p>
                
                <div className="card-lean">
                    <video muted autoPlay ><source src="../assets/videos/PresentacionLean.mp4" type="video/mp4"/></video>
                    <h2>About Leandro</h2>
                    <p>
                        Leadro Rios <br/>
                        Edad: 29 Años <br/>
                        Localidad: San Miguel <br/>
                        Talento: Cantante, Guitarrista, FullStack Developer
                    </p>
                </div>

                <div className="card-lucas">
                    <video muted autoPlay ><source src="../assets/videos/PresentacionLucas.mp4" type="video/mp4"/></video>
                    <h2>About Lucas</h2>
                    <p>
                        Nombr/e: Lucas Cordoba <br/>
                        Edad: 24 Años <br/>
                        Localidad: Lanus <br/>
                        Talento: Bailarin(Popping), FullStack Developer

                    </p>
                </div>

            </section>
        </main>
  )
}

export default AboutUs