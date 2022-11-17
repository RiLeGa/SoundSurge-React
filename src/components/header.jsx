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
               <li><a class="btn-neon" href="/admin/lista">Admin</a></li>
                    
                    <li><a class="btn-neon" href="/users/login">login</a></li>
                    <li><a class="btn-neon" href="/users/register">Register</a></li> 
               
                <li><a class="btn-neon" href="#">Categorias</a></li>
                <li><a class="btn-neon" href="#">Marcas</a></li> 
                <li><a class="btn-neon" href="#">Lo + vendido</a></li>
                 <form class="exit" action="/users/logout?_method=DELETE" method="post">
                        <button class="logout" type="submit">Cerrar Sesion</button> 
                    </form>
               
            </ul>
            </nav>
            <img src={logo} alt='' />
            <section>
            <ul class="opcionesDeProductos">
                <li><a class="btn-neon" href="/productos/categorias">Categorias</a></li>
                <li><a class="btn-neon" href="/productos/marcas">Marcas</a></li> 
                <li><a class="btn-neon" href="/productos/loMasVendido">Lo + vendido</a></li>
            </ul>
            </section>
            <form action="/busqueda" method="get">
                <div class="busqueda">
                <input id="search" name="search" type="text" placeholder="¿Que estas Buscando?" />
                <button type="submit"><i class="fas fa-search"></i></button>
                </div>
            </form>
            <div class="carrito">
            <a href="/productos/carrito" target="_blank" class="btn-neon"><i class="fas fa-shopping-cart"></i></a>
            </div>
            <div class="usuario">
                <input type="checkbox" name="perfil" id="perfil"/>   
                
                    <input type="checkbox" name="perfil" id="perfil"/>
                    <label class="perfilU" for="perfil"><img class="usuario"  /><h2>Hola!</h2>
                    </label>
            
                    <input type="checkbox" name="perfil" id="perfil"/>
                    <label class="sinLog" for="perfil"><i class="fas fa-user-circle"></i><h2>Hola!</h2></label>
                
                <nav class="opcionesDePerfil">
                    <ul>
                        
                            <li><a class="btn-neon" href="/users/perfil">Perfil</a></li>
                            
                                <li><a class="btn-neon" href="/admin/lista">Admin</a></li>

                            <form class="exit" action="/users/logout?_method=DELETE" method="post">
                            <button class="logout" type="submit">Cerrar Sesion</button> 
                            </form>
                        
                            <li><a class="btn-neon" href="/users/login">login</a></li>
                            <li><a class="btn-neon" href="/users/register">Register</a></li> 
                    
                        
                    </ul>
                </nav>
            </div>
        </section>
    </header>
  )
}

export default Header
