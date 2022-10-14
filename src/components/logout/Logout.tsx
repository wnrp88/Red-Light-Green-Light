import React from 'react'
import paths from '../../config'
import { LogoutOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
  const navigate = useNavigate()

  return (
    <LogoutOutlined
      className="icon-logout"
      onClick={() => navigate(paths.home.path)}
    />
  )
}

export default Logout
