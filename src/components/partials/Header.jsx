import React from 'react'
import { NavLink } from 'react-router-dom'

import logo from '../../assets/logo.png'

const Header = () => {
  return (
    <header>
    <section className="navegacion">
        <input type="checkbox" name="burguer" id="burguer"/>
        <label className="burguer" htmlFor="burguer"><i className="fas fa-bars"></i></label>
        <nav className="opcionesDePerfil-Movil">
            <ul>

            
                
                    <li><NavLink className="btn-neon" to="/">Perfil</NavLink></li>
                    <li><NavLink className="btn-neon" to="/">Admin</NavLink></li>
                    
               
                    <li><NavLink className="btn-neon" to="/">login</NavLink></li>
                    <li><NavLink className="btn-neon" to="/">Register</NavLink></li> 
                
                <li><NavLink className="btn-neon" to="/">Todos los productos</NavLink></li>
                <li><NavLink className="btn-neon" to="/">Lo + Vendido</NavLink></li>
                
                    <form className="exit" action="/users/logout?_method=DELETE" method="post">
                        <button className="logout" type="submit">Cerrar Sesion</button> 
                    </form>
                
            </ul>
        </nav>
        <NavLink className="logo" to="/"><img src={logo} alt='' /></NavLink>

        <section className="busqueda">
            <div>
                <form className="form-search" action="/busqueda" method="get">
                    <input type="text" name="search" id="search" placeholder="¿Que estas Buscando?"/>
                    <button type="submit"><i className="fas fa-search"></i></button>
                </form>
            </div>
        </section>
            
        
            <div className="carrito1">
                <NavLink to="/" target="_blank" className="btn-neon"><i className="fas fa-shopping-cart"></i></NavLink>
            </div>
        
                
       
        <div className="usuario">
            <input type="checkbox" name="perfil" id="perfil"/>   
            
                <input type="checkbox" name="perfil" id="perfil"/>
                <label className="perfilU btn-neon" htmlFor="perfil"><img src={logo} alt='' /><h2>Hola!</h2>
                </label>
        
            <nav className="opcionesDePerfil">
                <ul>
                    
                        <li><NavLink className="btn-neon" to="/">Perfil</NavLink></li>
                        
                            <li><NavLink className="btn-neon" to="/Admin">Admin</NavLink></li>
                        
                        <form className="exit" action="/users/logout?_method=DELETE" method="post">
                        <button className="logout" type="submit">Cerrar Sesion</button> 
                        </form>
                    
                        <li><NavLink className="btn-neon" to="/Login">Ingresar</NavLink></li>
                        <li><NavLink className="btn-neon" to="/Register">Registrarse</NavLink></li> 
                    
                    
                </ul>
            </nav>
        </div>
    </section>

    <section className="opcionesDeProductos">
        <ul className="opcionesDeProductos">
            

           
            <li><NavLink className="btn-neon" to="/">To2 los productos</NavLink></li>
            <li><NavLink className="btn-neon" to="/AboutUs">Somos SoudSurge</NavLink></li>
            <li><NavLink className="btn-neon" to="/">Lo + Vendido</NavLink></li>
        </ul>
        
    </section>
    
    
    
</header>
  )
}

export default Header
