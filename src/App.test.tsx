import React from 'react'
import { render } from '@testing-library/react'
import App from './App'
import { act } from 'react-dom/test-utils'

test('renders learn react link', () => {
  act(() => {
    render(<App/>)
  })
})
