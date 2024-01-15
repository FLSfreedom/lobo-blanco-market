import React from 'react'
import { useCarritoContext } from '../../Context/CarritoContext'

const ContenedorDetalleDeCarrito = () => {
  const { ProductosListaCarrito, precioTotal, borrarProducto } = useCarritoContext()
  return (
    <div>
        { ProductosListaCarrito.map(nuevoProducto => (
            <div key={nuevoProducto.id}>
                <img src={nuevoProducto.imagen} style={{width: 150, marginLeft: 10, marginTop: 10}}/>
                <div style={{display: 'inline-block', marginLeft: 10, marginRight: 10}}>
                   <div style={{display: 'inline-block', fontWeight: 'bold'}}>{nuevoProducto.nombre}</div>
                    - Cantidad: {nuevoProducto.cantidad} - Precio: {nuevoProducto.precio * nuevoProducto.cantidad} {nuevoProducto.moneda}
                </div>
                <div>
                  <button onClick={()=> borrarProducto(nuevoProducto.id)} style={{
                    margin: '1%'
                  }}> Eliminar producto</button>
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