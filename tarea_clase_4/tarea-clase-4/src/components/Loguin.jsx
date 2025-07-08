import { useAuthContext } from './context/AuthContext'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Loguin = ()=> {

  const [usuario, setUsuario] = useState('')
  const [password, setPassword] =  useState('')
  const { loguin, logout } = useAuthContext()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    //simulando autenticación
    if (usuario === 'admin@correo.com' && password === '1234') {
      loguin(usuario)
      navigate('/')
    } else {
      alert("⛔usuario o contraseña incorrectos")
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Iniciar sesión</legend>

        <label htmlFor="email">Email: </label>
        <input type="email" id="email" name="email" placeholder="usuario@correo.com" value={usuario} onChange={(e) => setUsuario(e.target.value)}/>

        <label htmlFor="pass">Contraseña: </label>
        <input type="password" name="pass" id="pass" value={password} onChange={ (e) => setPassword(e.target.value)}/>

        <button type="button" className="btn__loguin" onClick={handleSubmit}> Iniciar sesión </button>

      </fieldset>

      <button type="button" className="btn__loguin">Crear cuenta</button>
      <button type="button" onClick={logout} className="btn__loguin">Cerrar sesión</button>


    </form>
  )
}

export default Loguin