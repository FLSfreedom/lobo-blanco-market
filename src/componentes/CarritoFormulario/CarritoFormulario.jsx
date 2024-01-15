import React, { useState } from 'react';
import { addDoc, collection, doc, getFirestore } from "firebase/firestore";
import { useCarritoContext } from "../../Context/CarritoContext";
import './CarritoFormulario.css'

const CarritoFormulario = () => {
    const { ProductosListaCarrito, limpiar, precioTotal } = useCarritoContext();
    const [idDeOrden, setIdDeOrden] = useState();
    const [datosFormulario, setDatosFormulario] = useState({
        nombre: '',
        telefono: '',
        email: '',
        confirmarEmail: ''
    });

    const insertarOrden = (evt) => {
        evt.preventDefault();

        if (datosFormulario.email !== datosFormulario.confirmarEmail) {
            alert('Las direcciones de e-mail ingresadas no coinciden entre sí');
        } else if (datosFormulario.email === '' || datosFormulario.confirmarEmail === '' || datosFormulario.telefono === '' || datosFormulario.nombre === '') {
            alert('Completar todos los campos');
        } else if (precioTotal() === 0) {
            alert('Para generar el código de orden de compra debe agregar al menos 1 vehículo al carrito');
        } else {
            const orden = {
                nombreComprador: datosFormulario,
                estaActivo: true,
                seleccion: ProductosListaCarrito.map(({ id, nombre, precio, cantidad }) => ({ id, nombre, price: precio, quantity: cantidad })),
                total: precioTotal()
            };

            const db = getFirestore();
            const ordenesDb = collection(db, 'ordenes');

            addDoc(ordenesDb, orden)
                .then((nuevaOrdenReferencia) => setIdDeOrden(nuevaOrdenReferencia.id))
                .catch(err => console.log(err))
                .finally(() => {
                    limpiar();
                    setDatosFormulario({
                        nombre: '',
                        telefono: '',
                        email: '',
                        confirmarEmail: ''
                    });
                });
        }
    };

    const handleOnChange = (evt) => {
        setDatosFormulario({
            ...datosFormulario,
            [evt.target.name]: evt.target.value,
        });
    };

    return (
        <center className='formularioCompleto'>
            <div className='formularioSolo'>
                <div>
                    <h5>Ingresar datos del comprador</h5>
                </div>
                <form onSubmit={insertarOrden} style={{ width: '85%' }}>
                    <input
                        type="text"
                        name="nombre"
                        placeholder="Nombre y apellido"
                        onChange={handleOnChange}
                        value={datosFormulario.nombre}
                    />
                    <br />
                    <input
                        type="tel"
                        name="telefono"
                        placeholder="Teléfono"
                        onChange={handleOnChange}
                        value={datosFormulario.telefono}
                    />
                    <br />
                    <input
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        onChange={handleOnChange}
                        value={datosFormulario.email}
                    />
                    <br />
                    <input
                        type="email"
                        name="confirmarEmail"
                        placeholder="Confirmar e-mail"
                        onChange={handleOnChange}
                        value={datosFormulario.confirmarEmail}
                    />
                    <br />
                    <button type="submit">¡Comprar!</button>
                </form>
                <div>
                    <button onClick={limpiar}>Vaciar</button>
                </div>
                <div style={{
                    margin: '2%',
                    color: '#007ee5'
                }}>
                    {idDeOrden !== '' && <h5>Código de orden de compra: {idDeOrden}</h5>}
                </div>
            </div>
            <video playsInline autoPlay muted loop className='divVideoTuCompra'>
                <source src="./shopping.mp4" type="video/mp4"></source>
            </video>        
        </center>
    );
};

export default CarritoFormulario;
