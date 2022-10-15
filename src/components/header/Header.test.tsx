import React from 'react'
import { act } from 'react-dom/test-utils'
import { render, screen } from '@testing-library/react'
import Header from './Header'

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

it('render Header', () => {
  const text1 = 'test 1'
  const text2 = 'test2'

  act(() => {
    render(<Header text={text1}/>)
  })
  const textElement1 = screen.getByText(text1)
  expect(textElement1).toBeInTheDocument()

  act(() => {
    render(<Header text={text2}/>)
  })
  const textElement2 = screen.getByText(text2)
  expect(textElement2).toBeInTheDocument()
})

it('Header contains Logout', () => {
  act(() => {
    render(<Header text={''}/>)
  })

  const hasLogout = document.getElementsByClassName('icon-logout').length
  expect(hasLogout).toBeTruthy()
})
