import React from 'react'
import { useCarritoContext } from '../../Context/CarritoContext'

const ContenedorDetalleDeCarrito = () => {
  const { ProductosListaCarrito, precioTotal, borrarProducto } = useCarritoContext()
  return (
    <div>
        { ProductosListaCarrito.map(nuevoProducto => (
            <div key={nuevoProducto.id}>
                <img src={nuevoProducto.imagen}/>
                <p>
                  {nuevoProducto.nombre} - 
                  Cantidad: {nuevoProducto.cantidad} - 
                  Precio: {nuevoProducto.precio * nuevoProducto.cantidad} {nuevoProducto.moneda}
                </p>
                <div>
                  <button onClick={()=> borrarProducto(nuevoProducto.id)}> Eliminar producto</button>
                </div>             
            </div>
            )
          )            
        }
        <center>
          <h3>{precioTotal() !== 0 && `Precio total de compra: $ ${precioTotal()}`}</h3>
        </center>
    </div>
  )
}

export default ContenedorDetalleDeCarrito