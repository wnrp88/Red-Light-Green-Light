import React, { useContext } from 'react'
import { Button, Form, Input } from 'antd'
import User from '../../../models'
import { useNavigate } from 'react-router-dom'
import paths from '../../../config'
import Session from '../../../libs/Session'
import UserAutenticateContext from '../../../contexts'
import UserService from '../../../services/UserService'

const { Item } = Form

const FormLogin = () => {
  const navigate = useNavigate()
  const { setUserAutenticate } = useContext(UserAutenticateContext)

  const onFinish = (values: any) => {
    const name = values.name
    console.log('name', name)
    const registeredUser = UserService.findUser(name)
    console.log(registeredUser)
    if (registeredUser === null) {
      const user = new User()
      user.name = name
      user.save()
    }

    Session.autenticate(name)
    setUserAutenticate({
      name,
      autenticate: true
    })

    navigate(paths.game.path)
  }

  return (
    <Form
      name="login"
      onFinish={onFinish}
      autoComplete="off"
    >
      <Item
        label="Name"
        name="name"
        rules={[{
          required: true,
          whitespace: true,
          message: 'Please input your name!',
          min: 3,
          type: 'string'
        }]}
      >
        <Input/>
      </Item>

      <Item
        className="mt-10"
      >
        <Button
          type="primary"
          htmlType="submit"
          block
          className="btn-join"
        >
          JOIN
        </Button>
      </Item>
    </Form>
  )
}

export default FormLogin
