import { useAuth } from './context/AuthContext'

const Loguin = ()=> {

      const { isAuthenticated, setIsAuthenticated } = useAuth();

    const autenticado = (e)=>{
      e.preventDefault()
      setIsAuthenticated(true)
    }

    const cerrar = (e)=>{
      e.preventDefault()
      isAuthenticated ? setIsAuthenticated(false) : alert("Usted no se ha logueado")
    }

  return (
    <form>
      <fieldset>
        <legend>Iniciar sesión</legend>

        <label htmlFor="email">Email: </label>
        <input type="email" id="email" name="email" placeholder="ejemplo@correo.com"/>

        <label htmlFor="pass">Contraseña: </label>
        <input type="password" name="pass" id="pass" />

        <button type="button" onClick={(e)=>autenticado(e)} className="btn__loguin"> Entrar </button>

      </fieldset>

      <button type="button" className="btn__loguin">Crear cuenta</button>
      <button type="button" onClick={(e)=>cerrar(e)} className="btn__loguin">Cerrar sesión</button>


    </form>
  )
}

export default Loguin