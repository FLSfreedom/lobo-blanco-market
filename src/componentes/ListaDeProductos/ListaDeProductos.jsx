import React, { useState, useEffect } from 'react';
import ProductoCard from '../ProductoCard/ProductoCard';
import { db } from '/src/firebase/config.js';
import { collection, getDocs, query, where } from 'firebase/firestore';
import './ListaDeProductos.css'

const ListaDeProductos = () => {
  const [productos, setProductos] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Comestibles');

  const handleCategoriaSeleccionada = (categoria) => {
    setCategoriaSeleccionada(categoria);
  };

  useEffect(() => {
    const fetchDatos = async () => {
      const q = query(collection(db, 'productos-db'), where('categoria', '==', categoriaSeleccionada));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      const sortedProductos = data.sort((a, b) => a.nombre.localeCompare(b.nombre));
      setProductos(sortedProductos);
    };

    fetchDatos();
  }, [categoriaSeleccionada]);

  return (
    <div className='contenedorDeCardsYCategorías'>
      <div className='contenedorDeCategorias'>
        {['Bebidas_sin_alcohol', 'Comestibles', 'Bebidas_con_alcohol'].map((categoria) => (
          <button key={categoria} onClick={() => handleCategoriaSeleccionada(categoria)} className='botonCategoria'>
            {categoria.replace("_", " ").replace("_", " ")}
          </button>
        ))}
      </div>
      {categoriaSeleccionada && (
        <div className='contenedorDeCardsYTitulo'>
          <h3>{categoriaSeleccionada.replace("_", " ").replace("_", " ")}</h3>
          <div className='contenedorDeCards'>
            {productos.map((producto) => (
              <ProductoCard
                key={producto.id}
                id={producto.id}
                nombre={producto.nombre}
                moneda={producto.moneda}
                precio={producto.precio}
                imagen={producto.imagen}
                stock={producto.stock}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ListaDeProductos;
