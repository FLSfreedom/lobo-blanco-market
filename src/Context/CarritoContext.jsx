import { createContext, useContext, useState } from 'react'

export const CarritoContext = createContext([])
export const useCarritoContext = () => useContext(CarritoContext)
export const CarritoContextProvider = ({ children }) => {
    const [ProductosListaCarrito, setProductosListaCarrito] = useState([]);
  
    const agregarACarrito = (nuevoProducto, cantidad = 1) => {
      const idProductoCarrito = ProductosListaCarrito.findIndex(producto => producto.id === nuevoProducto.id);
  
      if (idProductoCarrito !== -1) {
        const nuevosProductos = [...ProductosListaCarrito];
        nuevosProductos[idProductoCarrito].cantidad += cantidad;
        setProductosListaCarrito(nuevosProductos);
        return;
      }
  
      setProductosListaCarrito([
        ...ProductosListaCarrito,
        { ...nuevoProducto, cantidad },
      ]);
    };

    const precioTotal = () => ProductosListaCarrito.reduce( (conteo, producto) => conteo += (producto.cantidad * producto.precio), 0)
    const montoTotal = () => ProductosListaCarrito.reduce( (conteo, producto) => conteo + producto.cantidad, 0)
    const borrarProducto = (id) => setProductosListaCarrito(ProductosListaCarrito.filter(producto => producto.id !== id))
    const limpiar = () => setProductosListaCarrito ([])

    return (
        <CarritoContext.Provider value={{
            ProductosListaCarrito,
            agregarACarrito,
            precioTotal,
            montoTotal,
            borrarProducto,
            limpiar
        }}>
            {children}
        </CarritoContext.Provider>
    );
};