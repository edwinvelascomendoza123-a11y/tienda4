const URL_API = 'https://dummyjson.com/products?limit=12'

export async function fetchProductos(signal) {
  const respuesta = await fetch(URL_API, { signal })
  if (!respuesta.ok) {
    throw new Error(`Error ${respuesta.status} al cargar los productos`)
  }
  const datos = await respuesta.json()
  return datos.products
}
