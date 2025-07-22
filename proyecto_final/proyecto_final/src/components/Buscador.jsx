import { FaSearch } from 'react-icons/fa'

export default function Buscador({ onFiltrar }) {
  return (
    <div className="input-group mb-3 mx-auto my-1" style={{width:"80%"}}>
      <span className="input-group-text">
        <FaSearch />
      </span>
      <input
        type="text"
        className="form-control"
        placeholder="Buscar productos..."
        onChange={(e) => onFiltrar(e.target.value)}
      />
    </div>
  )
}


