import React from 'react'
import logo from '../../assets/logo.png'

const Register = () => {
  return (
    <main className='register'>
        <section className="container-register">
            <section className="logo-register">
                <a className="logo" href="/"><img src={logo} alt='' /></a>
            </section>
            <h1>Registro</h1>
            <p>Completa el registro con lo solicitado para tener la mejor experiencia en SoundSurge.</p>

            <form action="/users/register" method="post" encType="multipart/form-data" id="formulario">

            <div className="icons">
                <label htmlFor="file"><div id="preview" className="styleImage"></div></label>
                <label htmlFor="file" id="iconUser"><i className="fa-solid fa-user"></i></label>
                <input type="file" name="imagen" id="file"/> 
            </div> 

            <div className="container">
                <label htmlFor="nombre">nombre</label>
                <input type="text" name="nombre" id="nombre" placeholder="Ingresa tu nombre"/>
                <div id="nombreContainer"></div>
        
            </div>
            <div className="container">
                <label htmlFor="apellido">apellido</label>
                <input type="text" name="apellido" id="apellido" placeholder="Ingresa tu apellido"/>
                <div id="apellidoContainer"></div>
                
            </div>
    
            <div className="container">
                <label htmlFor="email">email</label>
                <input type="email" name="email" id="email" placeholder="Ingresa tu email"/>
                <div id="emailContainer"></div>
                
            </div>
            <div className="container">
                <label htmlFor="contrasenia">contrasenia</label>
                <input type="password" name="contrasenia" id="clave" placeholder="Ingresa tu contraseña" autoComplete="off"/>
                <div id="passContainer"></div>
                
            </div>
            <div className="container">
                <label htmlFor="confirmar">Confirmar contraseña</label>
                <input type="password" name="confirmar" id="confirmar" placeholder="Confirma tu contraseña" autoComplete="off"/>
                <div id="passContainer2"></div>
                
            </div>
           

            <div className="terminos">
                <label htmlFor="terminos">Acepto los terminos y condiciones</label>
                <input type="checkbox" name="terminos" id="terminos"/>
                <div id="terminosContainer"></div>
            </div>
            <div>
                <button type="submit" className="enviar">Enviar</button>
            </div>
            <h4>--------------- Registrarse con -----------------</h4>
            <button type="submit" className="facebook"><i className="fab fa-facebook"></i> Registrarte con Facebook</button>
            
        
            <button type="submit" className="google"><i className="fab fa-google"></i> Registrarte con Google</button>

            </form>
            <div className="foot-reg">
            <a href="/">Soporte</a>
            <a href="/">Home</a>
            <a href="/">Contacto</a>
            </div>
            </section> 
                  
        </main>
  )
}

export default Register