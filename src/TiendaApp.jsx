import { useState } from 'react'
import { useProductos } from './hooks/useProductos'
import ProductoList from './components/ProductoList'
import CarritoPanel from './components/CarritoPanel'

export default function TiendaApp() {
  const { productos, cargando, error } = useProductos()
  const [carrito, setCarrito] = useState([])

  const agregar = (producto) => {
    setCarrito((actual) =>
      actual.some((p) => p.id === producto.id) ? actual : [...actual, producto]
    )
  }

  const quitar = (id) => setCarrito((actual) => actual.filter((p) => p.id !== id))
  const vaciar = () => setCarrito([])

  const total = carrito.reduce((suma, p) => suma + p.price, 0)

  return (
    <div className="app">
      <h1>Mini Tienda</h1>

      <div className="layout">
        <main>
          {cargando && <p className="estado">Cargando...</p>}
          {error && <p className="estado error">{error}</p>}
          {!cargando && !error && (
            <ProductoList productos={productos} carrito={carrito} onAgregar={agregar} />
          )}
        </main>

        <CarritoPanel carrito={carrito} total={total} onQuitar={quitar} onVaciar={vaciar} />
      </div>
    </div>
  )
}
