import React, { useState } from 'react';
import './ProductoCard.css';
import { useCarritoContext } from '../../Context/CarritoContext';

const ProductoCard = ({ id, nombre, precio, moneda, imagen, stock }) => {
  const { agregarACarrito } = useCarritoContext();
  const [cantidad, setCantidad] = useState(1);

  const handleIncremento = () => {
    setCantidad((cantidadAuxiliar) => Math.min(cantidadAuxiliar + 1, stock));
  };

  const handleDecremento = () => {
    setCantidad((cantidadAuxiliar) => Math.max(cantidadAuxiliar - 1, 1));
  };

  const handleAgregarAlCarrito = () => {
    agregarACarrito({
      id,
      nombre,
      precio,
      moneda,
      imagen,
    }, cantidad);
  };

  return (
    <div className='divGrandeProductoCard'>
      <img className='imagenProducto' src={imagen} alt="imagen del producto" />
      <h4>{nombre}</h4>
      <h4>{moneda}{precio}</h4>
      <div className='divAgregarYCantidad'>
        <button onClick={handleAgregarAlCarrito} className='botonesCard'>Agregar al Carrito</button>
        <div>
          <button onClick={handleDecremento} className='botonesCard botonesIncDec'>-</button>
          <span className='spanCantidadConteo'>{cantidad}</span>
          <button onClick={handleIncremento} className='botonesCard botonesIncDec'>+</button>
        </div>
      </div>
    </div>
  );
};

export default ProductoCard;