import React, { useState, useEffect } from 'react'

function UserList() {
    const [Usuarios, setUsuarios] = useState()
    
    const url = "http://localhost:4000/api/usuarios"
    const fetchApi = async () => {
        const response = await fetch(url)
        const responseJSON = await response.json()
        setUsuarios(responseJSON)
        console.log(responseJSON);
    }
    useEffect(() => {
        fetchApi()
    }, [])
  return (
    <main className="lista">
      <h1>Lista de usuarios</h1>
      <div className="table-responsive">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th id="marca2" scope="col">Apellido</th>
              <th id="marca2" scope="col">Direccion</th>
              <th id="marca2" scope="col">Telefono</th>
              <th scope="col">Email</th>
              <th scope="col">Rol</th>
              <th scope="col">Imagen</th>
            </tr>
          </thead>
          <tbody>
            {!Usuarios ? 'Cargando...' :
                Usuarios.data.map(usuario =>
            <tr>
              <th scope="row"> {usuario.id} </th>
              <td> {usuario.nombre} </td>
              <td id="marca2" colSpan="1"> {usuario.apellido} </td>
              <td id="marca2"> {usuario.direccion} </td>
              <td id="marca2"> {usuario.telefono} </td>
              <td id="marca2"> {usuario.email} </td>
              <td> {usuario.rolId} </td>
              <td>
                <img
                  className="usuario"
                  id="imgMain"
                  src= {`../../images/users/${usuario.imagen}`}
                  alt="Imagen principal"
                />
              </td>
              <td>
                <div className="edicion">
                  <form
                    action="borrarUsuario/usuario.id?_method=DELETE"
                    method="post"
                  >
                    <button type="submit" className="btn btn-danger">
                      <i className="fas fa-trash-alt"></i>
                    </button>
                  </form>
                </div>
              </td>
            </tr>
            )}
          </tbody>
        </table>
      </div>
    </main>
  )
}

export default UserList