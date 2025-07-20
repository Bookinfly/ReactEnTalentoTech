import {  createContext, useContext, useState } from "react"
import { ToastContainer, toast } from "react-toastify"

const AuthContext = createContext()

export const AuthProvider = ( {children} ) => {
  const [user, setUser] = useState(null)
  const loguin = (username) => {
    //simulando la creación de un token

    const token = `fake-token-${username}`

    localStorage.setItem('authToken', token)
    // alert("Bienvenido")

    setUser(username)
  }

  const logout = () => {
    localStorage.removeItem('authToken')
    // alert("Usuario desconectado")
    toast.warn("Usuario desconectado")         // Amarillo
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{user, loguin, logout}}>
      {children}
    </AuthContext.Provider>
  )

}

export const useAuthContext = () => useContext(AuthContext)