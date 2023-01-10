import React from 'react'

import logo from '../../assets/LogoSoundSurge.png'

function Login() {

  return (
    <main className="login">
        <section className="cont-form">
        <section className="logo-login">
                <img src={logo} alt="Logo de la empresa"/>
        </section>
        <h1>Bienvenido</h1>
        <h4>---------------Ingresar con email---------------</h4>
        <form action="/users/login" method="post" id="formularioLogin">
            <div className="container">
                <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="Ingresa tu email"/>
                    <div id="emailContainer"></div>
                   
            </div>
            <div className="container">
                <label htmlFor="contrasenia">Contraseña</label>
                    <input type="password" name="contrasenia" id="clave"  placeholder="Ingresa tu contraseña"/>
                    <div id="passContainer"></div>
                    
            </div>
            <div className="mostrar">
                <input type="checkbox" name="recordarme" id="recordarme"/>
                    <label htmlFor="recordarme" >Recordarme</label>
            </div>
            <div className="iniciar">
                <button type="submit" className="inicio">Iniciar sesión</button>
            </div>
        </form>
        <h4>---------------o---------------</h4>

            <button type="submit"><i className="fab fa-google"></i> Acceder con Google</button>

            <button type="submit" className="face"><i className="fab fa-facebook"></i> Acceder con Facebook</button>       
 

            <h3>¿No tiene cuenta?<a href="/users/register">Registrate</a></h3>

            <div className="foot-log">
                <a className="fin-login" href="/">Soporte</a>
                <a className="fin-login"  href="/">Home</a>
                <a className="fin-login"  href="/">Contacto</a>
            </div>
        </section>
            {/* <section className="video-promo">
                <video muted autoPlay loop><source src="/images/videos/Guitar-Center-Showtime-Commercial.mp4"/></video>
            </section> */}
    </main>
  )
}

export default Login