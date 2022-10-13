import React, { useContext } from 'react'
import Session from '../../libs/Session'
import { Navigate } from 'react-router-dom'
import paths from '../../config'
import UserAutenticateContext from '../../contexts'

const Logout = () => {
  const { setUserAutenticate } = useContext(UserAutenticateContext)

  setUserAutenticate({
    name: '',
    autenticate: false
  })

  Session.logout()

  return <Navigate to={paths.home.path}/>
}

export default Logout
