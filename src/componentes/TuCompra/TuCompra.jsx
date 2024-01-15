import CarritoFormulario from '../CarritoFormulario/CarritoFormulario'
import ContenedorDetalleDeCarrito from '../ContenedorDetalleDeCarrito/ContenedorDetalleDeCarrito'
import './TuCompra.css'

const TuCompra = () => {
  return (
    <div id='TuCompraId'>
      <h2>Tu Compra</h2>
      <ContenedorDetalleDeCarrito/>
      <CarritoFormulario/>
    </div>
  )
}

export default TuCompra