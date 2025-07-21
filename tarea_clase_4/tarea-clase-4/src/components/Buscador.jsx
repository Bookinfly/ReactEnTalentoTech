
export default function Buscador({ onFiltrar }) {
  return (
    <input
      type="text"
      placeholder="Buscar productos..."
      className="form-control mb-3"
      onChange={(e) => onFiltrar(e.target.value)}
    />
  )
}

