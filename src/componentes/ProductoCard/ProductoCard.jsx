import React, { useState } from 'react';
import './ProductoCard.css';
import { useCarritoContext } from '../../Context/CarritoContext';

const ProductoCard = ({ id, nombre, precio, moneda, imagen, stock }) => {
  const { agregarACarrito } = useCarritoContext();
  const [cantidad, setCantidad] = useState(1);

  const handleCantidadChange = (event) => {
    const nuevaCantidad = parseInt(event.target.value, 10) || 1;
    setCantidad(Math.min(nuevaCantidad, stock));
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
      <input
        type="number"
        value={cantidad}
        onChange={handleCantidadChange}
        min="1"
        max={stock}
      />
      <button onClick={handleAgregarAlCarrito}>Agregar al Carrito</button>
    </div>
  );
};

export default ProductoCard;