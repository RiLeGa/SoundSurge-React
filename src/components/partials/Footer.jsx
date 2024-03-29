import React from 'react'
import logo from '../../assets/logo.png'


const Footer =() =>{
  return (
    <footer>
    <div className="logo-footer">
        <a className="logo" href="/"><img src={logo} alt='' /></a>
    </div>
    <section className="info">
        <ul>
            <h2>SOBRE NOSOTROS</h2>
            <li><a href="/">About <br/> SoundSurge</a></li>
            <li><a href="/">Preguntas <br/> frecuentes</a></li>
        </ul>
        <ul>
            <h2>NUESTROS LOCALES</h2>
            <li><a href="/" id="ubi1">Sucursal <br/> Lanus</a></li>
            <li><a href="/" id="ubi2" >Sucursal <br/> San Miguel</a></li>
        </ul>
        
    </section>
        <h2>REDES</h2>
    <section className="Redes-sociales">
        <ul>
            <li><a href="/"><i className="fa-brands fa-facebook-square"></i></a></li>
            <li><a href="/"><i className="fa-brands fa-instagram"></i></a></li>
            <li><a href="/"><i className="fa-brands fa-whatsapp"></i></a></li>
            <li><a href="/"><i className="fa-brands fa-linkedin"></i></a></li>
            <li><a href="/"><i className="fas fa-at" ></i></a></li>
        </ul>
    </section>
</footer>
  )
}

export default Footer