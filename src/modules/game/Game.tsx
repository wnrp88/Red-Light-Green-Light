import React, { useContext, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import Session from '../../libs/Session'
import paths from '../../config'
import { Col, Layout, Row, Typography } from 'antd'
import UserAutenticateContext from '../../contexts'
import { LogoutOutlined } from '@ant-design/icons'
import LocalStorage from '../../libs/LocalStorage'
import User from '../../models'
import TrafficLight from './traffic-light/TrafficLight'

const {
  Header,
  Content
} = Layout
const { Title } = Typography

const Game = () => {
  const { session } = useContext(UserAutenticateContext)
  const navigate = useNavigate()
  const localStorage = new LocalStorage()
  const registeredUser = localStorage.findUser(session.name)
  const [trafficLight, setTrafficLight] = useState(false)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [user, setUser] = useState((registeredUser as User))

  if (!Session.isAutenticate() || registeredUser === null) {
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
              Hi {user?.name}
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

      <Content>
        <Row justify="center">
          <Col className="mt-50">
            <Title level={3}>
              High Score: {user?.maxScore}
            </Title>
          </Col>
        </Row>

        <Row
          justify="center"
          className="mt-20"
        >
          <Col>
            <TrafficLight
              score={user.score}
              trafficLight={trafficLight}
              setTrafficLight={setTrafficLight}
            />
          </Col>
        </Row>
      </Content>
    </>
  )
}

export default Game
