import React from 'react'
import Session from '../libs/Session'
import { UserAutenticateContectInterface } from '../interfaces'

export const session = Session.getAuthenticated()

const UserAutenticateContext = React.createContext({
  session,
  setUserAutenticate: (session: UserAutenticateContectInterface): void => {
    //
  }
})

export default UserAutenticateContext
