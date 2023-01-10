import React, { useState, useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { NavLink } from 'react-router-dom';

function PruebaProductos () {

    const url = "http://localhost:4000/api/productos"
    const [Listado, setListado] = useState()
    
    const fetchApi = async () => {
        const response = await fetch(url)
        const responseJSON = await response.json()
        setListado(responseJSON)
        console.log(responseJSON);
    }
    
    useEffect(() => {
        fetchApi()
    }, [])

  return (
    <main className='lista'>
      <h1>Listado de Productos</h1>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Id</TableCell>
            <TableCell align="center">Nombre</TableCell>
            <TableCell align="center">Imagen</TableCell>
            <TableCell align="center">Marca</TableCell>
            <TableCell align="center">Stock</TableCell>
            <TableCell align="center">Precio</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {!Listado ? "Cargando..." :
        Listado.data.map( producto => (
            <TableRow
              key={producto.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
               <TableCell align="center" component="th" scope="row"> {producto.id}  </TableCell>
              
              <TableCell align="center">  {producto.titulo}</TableCell>

              <TableCell align="center"><img className="imgList"  id="imgMain" src={`/images/${producto.imagenes[0].nombre}`} alt="Imagen principal"/> </TableCell> 
              
              <TableCell align="center">  {producto.marca.nombre}  </TableCell>
                
              <TableCell align="center">   {producto.stock}  </TableCell>
              
              <TableCell align="center"> $ {producto.precio} </TableCell> 
              
            </TableRow>
        ))}
        </TableBody>
      </Table>
    </TableContainer>
    </main>
  )
}

export default PruebaProductos 