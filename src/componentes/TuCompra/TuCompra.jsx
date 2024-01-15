import CarritoFormulario from '../CarritoFormulario/CarritoFormulario'
import ContenedorDetalleDeCarrito from '../ContenedorDetalleDeCarrito/ContenedorDetalleDeCarrito'
import './TuCompra.css'

const TuCompra = () => {
  return (
    <div id='TuCompraId'>
      <ContenedorDetalleDeCarrito/>
      <CarritoFormulario/>
    </div>
  )
}

export default TuCompra