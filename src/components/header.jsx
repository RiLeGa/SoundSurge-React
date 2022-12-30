import React from 'react'
import logo from '../assets/logo.png'

const Header = () => {
  return (
    <header>
    <section className="navegacion">
        <input type="checkbox" name="burguer" id="burguer"/>
        <label className="burguer" htmlFor="burguer"><i className="fas fa-bars"></i></label>
        <nav className="opcionesDePerfil-Movil">
            <ul>
                
                    <li><a className="btn-neon" href="/users/perfil">Perfil</a></li>
                    
                        <li><a className="btn-neon" href="/admin/lista">Admin</a></li>
                    
               
                    <li><a className="btn-neon" href="/users/login">login</a></li>
                    <li><a className="btn-neon" href="/users/register">Register</a></li> 
                
                <li><a className="btn-neon" href="/productos/todos">Todos los productos</a></li>
                <li><a className="btn-neon" href="/productos/loMasVendido">Lo + Vendido</a></li>
                
                    <form className="exit" action="/users/logout?_method=DELETE" method="post">
                        <button className="logout" type="submit">Cerrar Sesion</button> 
                    </form>
                
            </ul>
        </nav>
        <a className="logo" href="/"><img src={logo} alt='' /></a>

        <section className="busqueda">
            <div>
                <form className="form-search" action="/busqueda" method="get">
                    <input type="text" name="search" id="search" placeholder="¿Que estas Buscando?"/>
                    <button type="submit"><i className="fas fa-search"></i></button>
                </form>
            </div>
        </section>
            
        
            <div className="carrito1">
                <a href="/productos/carrito" target="_blank" className="btn-neon"><i className="fas fa-shopping-cart"></i></a>
            </div>
        
                
       
        <div className="usuario">
            <input type="checkbox" name="perfil" id="perfil"/>   
            
                <input type="checkbox" name="perfil" id="perfil"/>
                <label className="perfilU btn-neon" htmlFor="perfil"><img src={logo} alt='' /><h2>Hola!</h2>
                </label>
        
            <nav className="opcionesDePerfil">
                <ul>
                    
                        <li><a className="btn-neon" href="/users/perfil">Perfil</a></li>
                        
                            <li><a className="btn-neon" href="/admin/lista">Admin</a></li>
                        
                        <form className="exit" action="/users/logout?_method=DELETE" method="post">
                        <button className="logout" type="submit">Cerrar Sesion</button> 
                        </form>
                    
                        <li><a className="btn-neon" href="/users/login">Ingresar</a></li>
                        <li><a className="btn-neon" href="/users/register">Registrarse</a></li> 
                    
                    
                </ul>
            </nav>
        </div>
    </section>

    <section className="opcionesDeProductos">
        <ul className="opcionesDeProductos">
            

           
            <li><a className="btn-neon" href="/productos/todos">To2 los productos</a></li>
            <li><a className="btn-neon" href="/AboutUs">Somos SoudSurge</a></li>
            <li><a className="btn-neon" href="/productos/loMasVendido">Lo + Vendido</a></li>
        </ul>
        
    </section>
    
    
    
</header>
  )
}

export default Header
