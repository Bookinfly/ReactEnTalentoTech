import React from "react";
import { useAuthContext } from './context/AuthContext'
import { Navigate } from 'react-router-dom'

function RutaProtegida({ children }){
  const { user } = useAuthContext()

  if ( !user ){
    return <Navigate to="/loguin" replace />
  }

  return children

}

export default RutaProtegida