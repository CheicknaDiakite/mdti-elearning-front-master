import React from 'react'
import { Navigate } from 'react-router-dom'
import { accountService } from '../_services/'

export default function AuthGuard({children}) {
    

    if(!accountService.isLogged()){
        return <Navigate to="/auth/login" />
    }
  return children
}
