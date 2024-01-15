import React from 'react'
import ContenedorDetalleDeCarrito from '../ContenedorDetalleDeCarrito/ContenedorDetalleDeCarrito'



const CarritoEnDetalle = () => {
  return (
    <div style={{
        marginTop: '4%',
        height: '100%',
        width: '100%',
        backgroundColor: 'rgb(7, 114, 255',
        display: 'absolute',
        float: 'right',
        borderRadius: 15,
        color: 'white'
    }}>
        <div>
           <ContenedorDetalleDeCarrito />
        </div>
            <a href="#tu-compra">Tu compra</a>
        </div>
  )
}

export default CarritoEnDetalle