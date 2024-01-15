import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className='navCompleto'>
        <div className='logoYNombre'>
            <img className='imagenLogo' src="/white-wolf.jpg" alt="Lobo Blanco" />
            <h1>Lobo Blanco Market</h1>
        </div>
        <div className='secciones'>
          <a href="#nosotrosId">Nosotros</a>
          <a href="#productosId">Productos</a>
          <a href="#TuCompraId">Tu compra</a>
          <a href="/contacto">Contacto</a>
        </div>
    </div>
  );
}

export default NavBar;