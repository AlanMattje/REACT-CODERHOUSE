import React from 'react'
import Producto1 from './productos/producto1'
import Producto2 from './productos/producto2'
import Producto3 from './productos/producto3'

const Productos = () => {

  return (
    <div>
    <div className='item'>
      <Producto1/>
      <Producto2/>
      <Producto3/>
      </div>
    </div>
  )
}

export default Productos