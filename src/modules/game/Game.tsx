import React, { useContext, useState } from 'react'
import { Navigate } from 'react-router-dom'
import Session from '../../libs/Session'
import paths from '../../config'
import { Col, Layout, Row, Typography } from 'antd'
import UserAutenticateContext from '../../contexts'
import LocalStorage from '../../libs/LocalStorage'
import User from '../../models'
import TrafficLight from './traffic-light/TrafficLight'
import Walk from './walk/Walk'
import Header from '../../components/header/Header'

const {
  Content
} = Layout
const { Title } = Typography

const Game = () => {
  const { session } = useContext(UserAutenticateContext)
  const localStorage = new LocalStorage()
  const registeredUser = localStorage.findUser(session.name)
  const [trafficLight, setTrafficLight] = useState(false)
  const [user, setUser] = useState<User>((registeredUser as User))

  if (!Session.isAutenticate() || registeredUser === null) {
    return <Navigate to={paths.home.path}/>
  }

  return (
    <>
      <Header name={user.name}/>

      <Content>
        <Row justify="center">
          <Col className="mt-50">
            <Title level={3}>
              High Score: {user.maxScore}
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

        <Row justify="center">
          <Col className="mt-10">
            <Title level={3}>
              Score: {user.score}
            </Title>
          </Col>
        </Row>

        <Row justify="center" className="mt-10" gutter={[5, 5]}>
          <Walk
            trafficLight={trafficLight}
            setTrafficLight={setTrafficLight}
            user={user}
            setUser={setUser}
          />
        </Row>
      </Content>
    </>
  )
}

export default Game
