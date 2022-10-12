import React from 'react'
import Session from '../../libs/Session'
import { Navigate } from 'react-router-dom'
import paths from '../../config'

const Logout = () => {
  Session.logout()
  return <Navigate to={paths.home.path}/>
}

export default Logout
