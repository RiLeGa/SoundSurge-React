import React, { useState } from 'react'
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';

function CrearProducto() {
    const [name, setName] = useState()
    const handleChange = (event) =>{
        setName(event.target.value)
    }

  return (
    <main className='form-create'>
        <h2>Nuevo Producto</h2>
    <section>
        <FormControl variant="standard">
        <InputLabel htmlFor="component-helper">Name</InputLabel>
        <Input
          id="component-helper"
          value={"Titulo"}
          onChange={handleChange}
          aria-describedby="component-helper-text"
        />
        <FormHelperText id="component-helper-text">
          Some important helper text
        </FormHelperText>
      </FormControl>
    </section>
  </main>
  )
}

export default CrearProducto