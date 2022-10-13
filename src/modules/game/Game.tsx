import React, { useContext } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import Session from '../../libs/Session'
import paths from '../../config'
import { Col, Layout, Row, Typography } from 'antd'
import UserAutenticateContext from '../../contexts'
import { LogoutOutlined } from '@ant-design/icons'

const {
  Header,
  Content
} = Layout
const { Title } = Typography

const Game = () => {
  const { session } = useContext(UserAutenticateContext)
  const navigate = useNavigate()

  if (!Session.isAutenticate()) {
    return <Navigate to={paths.home.path}/>
  }

  return (
    <>
      <Header className="header">
        <Row align="middle">
          <Col flex="auto">
            <Title
              level={4}
              className="title mbi-0"
            >
              Hi {session.name}
            </Title>
          </Col>
          <Col flex="none">
            <LogoutOutlined
              className="icon-logout"
              onClick={() => navigate(paths.home.path)}
            />
          </Col>
        </Row>
      </Header>
      <Content>Content</Content>
    </>
  )
}

export default Game
