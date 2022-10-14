import React, { useContext } from 'react'
import paths from '../../config'
import { LogoutOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import UserAutenticateContext from '../../contexts'
import Session from '../../libs/Session'

const Logout = () => {
  const navigate = useNavigate()
  const { setUserAutenticate } = useContext(UserAutenticateContext)

  const out = () => {
    setUserAutenticate({
      name: '',
      autenticate: false
    })

    Session.logout()

    navigate(paths.home.path)
  }

  return (
    <LogoutOutlined
      className="icon-logout"
      onClick={out}
    />
  )
}

export default Logout
