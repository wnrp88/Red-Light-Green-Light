import React from 'react'
import { act } from 'react-dom/test-utils'
import { render } from '@testing-library/react'
import Loading from './Loading'

it('render Loading', () => {
  act(() => {
    render(<Loading/>)
  })

  const hasLogout = document.getElementsByClassName('loading-spin').length
  expect(hasLogout).toBeTruthy()
})
