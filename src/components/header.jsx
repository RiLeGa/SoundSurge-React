import React from 'react'
import logo from '../assets/logo.png'

const Header = () => {
  return (
    <header>
    <section class="navegacion">
        <input type="checkbox" name="burguer" id="burguer"/>
        <label class="burguer" for="burguer"><i class="fas fa-bars"></i></label>
        <nav class="opcionesDePerfil-Movil">
            <ul>
                
                    <li><a class="btn-neon" href="/users/perfil">Perfil</a></li>
                    
                        <li><a class="btn-neon" href="/admin/lista">Admin</a></li>
                    
               
                    <li><a class="btn-neon" href="/users/login">login</a></li>
                    <li><a class="btn-neon" href="/users/register">Register</a></li> 
                
                <li><a class="btn-neon" href="/productos/todos">Todos los productos</a></li>
                <li><a class="btn-neon" href="/productos/loMasVendido">Lo + Vendido</a></li>
                
                    <form class="exit" action="/users/logout?_method=DELETE" method="post">
                        <button class="logout" type="submit">Cerrar Sesion</button> 
                    </form>
                
            </ul>
        </nav>
        <a class="logo" href="/"><img src={logo} alt='' /></a>

        <section class="busqueda">
            <div>
                <form class="form-search" action="/busqueda" method="get">
                    <input type="text" name="search" id="search" placeholder="¿Que estas Buscando?"/>
                    <button type="submit"><i class="fas fa-search"></i></button>
                </form>
            </div>
        </section>
            
        
            <div class="carrito1">
                <a href="/productos/carrito" target="_blank" class="btn-neon"><i class="fas fa-shopping-cart"></i></a>
            </div>
        
                
       
        <div class="usuario">
            <input type="checkbox" name="perfil" id="perfil"/>   
            
                <input type="checkbox" name="perfil" id="perfil"/>
                <label class="perfilU btn-neon" for="perfil"><img src={logo} alt='' /><h2>Hola!</h2>
                </label>
        
            <nav class="opcionesDePerfil">
                <ul>
                    
                        <li><a class="btn-neon" href="/users/perfil">Perfil</a></li>
                        
                            <li><a class="btn-neon" href="/admin/lista">Admin</a></li>
                        
                        <form class="exit" action="/users/logout?_method=DELETE" method="post">
                        <button class="logout" type="submit">Cerrar Sesion</button> 
                        </form>
                    
                        <li><a class="btn-neon" href="/users/login">Ingresar</a></li>
                        <li><a class="btn-neon" href="/users/register">Registrarse</a></li> 
                    
                    
                </ul>
            </nav>
        </div>
    </section>

    <section class="opcionesDeProductos">
        <ul class="opcionesDeProductos">
            

           
            <li><a class="btn-neon" href="/productos/todos">To2 los productos</a></li>
            <li><a class="btn-neon" href="/AboutUs">Somos SoudSurge</a></li>
            <li><a class="btn-neon" href="/productos/loMasVendido">Lo + Vendido</a></li>
        </ul>
        
    </section>
    
    
    
</header>
  )
}

export default Header
