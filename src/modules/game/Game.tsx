import React from 'react'
import { Navigate } from 'react-router-dom'
import Session from '../../libs/Session'
import paths from '../../config'

const Game = () => {
  if (!Session.isAutenticate()) {
    return <Navigate to={paths.home.path}/>
  }

  return (
    <></>
  )
}

export default Game
