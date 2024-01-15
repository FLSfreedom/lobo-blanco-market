import React from 'react';
import './Productos.css';
import ListaDeProductos from '../ListaDeProductos/ListaDeProductos';  // Ajusta la ruta según tu estructura de archivos

const Productos = () => {
  return (
    <div className='divContenedorProductos' id='productosId'>
      <h2>Productos</h2>
      <ListaDeProductos />
    </div>
  );
};

export default Productos;