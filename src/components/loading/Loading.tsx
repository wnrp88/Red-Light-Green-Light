import React from 'react'
import { Spin } from 'antd'

const Loading = (): JSX.Element => {
  return (
    <div className="loading-spin">
      <Spin />
    </div>
  )
}

export default Loading
