import React from 'react'
import logo from '../assets/logo.png'


const Footer =() =>{
  return (
    <footer>
    <div class="logo-footer">
        <a class="logo" href="/"><img src={logo} alt='' /></a>
    </div>
    <section class="info">
        <ul>
            <h2>SOBRE NOSOTROS</h2>
            <li><a href="/aboutUs">About <br/> SoundSurge</a></li>
            <li><a href="">Preguntas <br/> frecuentes</a></li>
        </ul>
        <ul>
            <h2>NUESTROS LOCALES</h2>
            <li><a id="ubi1">Sucursal <br/> Lanus</a></li>
            <li><a id="ubi2" >Sucursal <br/> San Miguel</a></li>
        </ul>
    </section>
    <section class="ubicacion">
        <div id="mapa" class="mapa">
        </div>
    </section>
        <h2>REDES</h2>
    <section class="Redes-sociales">
        <ul>
            <li><a href="#"><i class="fa-brands fa-facebook-square"></i></a></li>
            <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
            <li><a href="#"><i class="fa-brands fa-whatsapp"></i></a></li>
            <li><a href="#"><i class="fa-brands fa-linkedin"></i></a></li>
            <li><a href="#"><i class="fas fa-at" ></i></a></li>
        </ul>
    </section>
</footer>
  )
}

export default Footer