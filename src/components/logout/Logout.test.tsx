import React from 'react'
import { act } from 'react-dom/test-utils'
import { render } from '@testing-library/react'
import Logout from './Logout'

const mockedUsedNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate
}))

beforeEach(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn()
    }))
  })
})

it('render Logout', () => {
  act(() => {
    render(<Logout/>)
  })

  const hasLogout = document.getElementsByClassName('icon-logout').length
  expect(hasLogout).toBeTruthy()
})
