import './App.css'
import Footer from './componentes/Footer/Footer'
import NavBar from './componentes/NavBar/NavBar'
import Nosotros from './componentes/Nosotros/Nosotros'
import Productos from './componentes/Productos/Productos'
import TuCompra from './componentes/TuCompra/TuCompra'
import { CarritoContextProvider } from './Context/CarritoContext'


function App() {

  return (
    <CarritoContextProvider>
      <>
        <NavBar />
        <Nosotros />
        <Productos />
        <Footer />
        <TuCompra />
      </>
    </CarritoContextProvider>
  )
}

export default App
