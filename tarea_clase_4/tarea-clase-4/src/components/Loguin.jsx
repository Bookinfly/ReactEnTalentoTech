import { useAuthContext } from './context/AuthContext'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify"


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
      toast.success(`bienvenido ${usuario} 🤗`)
      navigate('/')
    } else {
      // alert("⛔usuario o contraseña incorrectos")
      toast.error("⛔usuario o contraseña incorrectos");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset className='mb-4'>
        <legend style={{color:"var(--color-one)"}} className='h1 fw-bold'>Iniciar sesión</legend>

        <label htmlFor="email" style={{color:"var(--color-one)"}}>Email: </label>
        <input type="email" id="email" name="email" placeholder="usuario@correo.com" value={usuario} onChange={(e) => setUsuario(e.target.value)} required/>

        <label htmlFor="pass" style={{color:"var(--color-one)"}}>Contraseña: </label>
        <input type="password" name="pass" id="pass" value={password} onChange={ (e) => setPassword(e.target.value)} required/>

        <button type="button" className="fw-bold col-6 rounded-3 mx-auto mt-2" onClick={handleSubmit} required> Iniciar sesión </button>

      </fieldset>

      <button type="button"  className="fw-bold  col-6 rounded-3 mx-auto mt-3" disabled > Crear cuenta</button>
      <button type="button" onClick={logout} className="fw-bold  col-6 rounded-3 mx-auto mt-2">Cerrar sesión</button>

    </form>
  )
}

export default Loguin