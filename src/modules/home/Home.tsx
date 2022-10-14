import React from 'react'
import { Col, Layout, Row, Typography } from 'antd'
import { PlayCircleOutlined } from '@ant-design/icons'
import FormLogin from './form-login/FormLogin'

const { Content } = Layout
const { Title } = Typography

const Home = () => {
  return (
    <Content>
      <Row
        align="middle"
        justify="center"
      >
        <Col className="mt-50">
          <PlayCircleOutlined style={{ fontSize: 48 }}/>
        </Col>
      </Row>

      <Row
        align="middle"
        justify="center"
      >
        <Col className="mt-20">
          <Title level={4}>Create new player</Title>
        </Col>
      </Row>

      <Row
        align="middle"
        justify="center"
      >
        <Col
          className="mt-20"
          xs={18}
          sm={16}
          md={12}
          lg={6}
          xl={4}
        >
          <FormLogin/>
        </Col>
      </Row>
    </Content>
  )
}

export default Home
