import React from 'react'
import { Button, Form, Input } from 'antd'

const { Item } = Form

const FormLogin = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values)
  }

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
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
        wrapperCol={{
          offset: 8,
          span: 16
        }}
        className="mt-10"
      >
        <Button
          type="primary"
          htmlType="submit"
          block
        >
          JOIN
        </Button>
      </Item>
    </Form>
  )
}

export default FormLogin
