import { useEffect, useState } from 'react'
import { fetchProductos } from '../services/fetchProductos'

export function useProductos() {
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const controlador = new AbortController()

    setCargando(true)
    setError(null)

    fetchProductos(controlador.signal)
      .then((lista) => setProductos(lista))
      .catch((e) => {
        if (e.name === 'AbortError') return
        setError('No se pudieron cargar los productos. Revisa tu conexión a internet.')
      })
      .finally(() => {
        if (!controlador.signal.aborted) setCargando(false)
      })

    return () => controlador.abort()
  }, [])

  return { productos, cargando, error }
}
