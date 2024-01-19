import React from 'react'
import { useCarritoContext } from '../../Context/CarritoContext'
import './ContenedorDetalleDeCarrito.css'

const ContenedorDetalleDeCarrito = () => {
  const { ProductosListaCarrito, precioTotal, borrarProducto } = useCarritoContext()
  return (
    <div className='contenedorDetalleCarrito'>
        { ProductosListaCarrito.map(nuevoProducto => (
            <div className='contenedorDetalleCarritoChild' key={nuevoProducto.id}>
                <img className='detalleCarritoImagen' src={nuevoProducto.imagen}/>
                <p className='pDetalleCarrito'>
                  {nuevoProducto.nombre} <br></br>
                  Cantidad: {nuevoProducto.cantidad} <br></br>
                  Precio: {nuevoProducto.precio * nuevoProducto.cantidad} {nuevoProducto.moneda}
                </p>
                <div>
                  <button className='botonEliminarProductoCarrito' onClick={()=> borrarProducto(nuevoProducto.id)}> Eliminar producto</button>
                </div>             
            </div>
            )
          )            
        }
        <center>
          <h4>{precioTotal() !== 0 && `Precio total de compra: $ ${precioTotal()}`}</h4>
        </center>
    </div>
  )
}

export default ContenedorDetalleDeCarrito