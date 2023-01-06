import React from 'react'
import { NavLink } from 'react-router-dom'

function Admin() {
  return (
    <main className='lista'>
      <div>
        <NavLink to="/UserList">Listado de ususarios</NavLink>
      </div>
      
      <div>
        <NavLink to="/ProductList">Listado de productos</NavLink>
      </div>
    </main>
    )
}

export default Admin