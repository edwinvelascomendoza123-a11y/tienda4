export default function CarritoPanel({ carrito, total, onQuitar, onVaciar }) {
  return (
    <aside className="carrito">
      <h2>
        Carrito <span className="contador">{carrito.length}</span>
      </h2>

      {carrito.length === 0 ? (
        <p className="vacio">El carrito está vacío</p>
      ) : (
        <ul>
          {carrito.map((item) => (
            <li key={item.id}>
              <span className="item-titulo">{item.title}</span>
              <span className="item-precio">$ {item.price.toFixed(2)}</span>
              <button className="quitar" onClick={() => onQuitar(item.id)}>
                Quitar
              </button>
            </li>
          ))}
        </ul>
      )}

      <p className="total">
        Total: <strong>$ {total.toFixed(2)}</strong>
      </p>

      <button className="vaciar" onClick={onVaciar} disabled={carrito.length === 0}>
        Vaciar carrito
      </button>
    </aside>
  )
}
