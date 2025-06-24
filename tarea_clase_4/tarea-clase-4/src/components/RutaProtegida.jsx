import React from "react";
import { useAuth } from './context/AuthContext'
import { Navigate } from 'react-router-dom'

function RutaProtegida({ children }){
  const { isAuthenticated } = useAuth()

  if ( !isAuthenticated ){
    return <Navigate to="/loguin" replace />
  }

  return children

}

export default RutaProtegida