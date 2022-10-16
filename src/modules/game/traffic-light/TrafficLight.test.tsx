import React from 'react'
import { act } from 'react-dom/test-utils'
import { render } from '@testing-library/react'
import TrafficLight from './TrafficLight'

it('render TrafficLight', () => {
  const score = 0
  const trafficLight = false
  const setTrafficLight = (trafficLight: boolean) => {
  }

  act(() => {
    render(<TrafficLight
      score={score}
      trafficLight={trafficLight}
      setTrafficLight={setTrafficLight}
    />)
  })

  const ligthRed = document.getElementsByClassName('light-red').length
  expect(ligthRed).toBeTruthy()

  act(() => {
    render(<TrafficLight
      score={score}
      trafficLight={!trafficLight}
      setTrafficLight={setTrafficLight}
    />)
  })

  const lightGreen = document.getElementsByClassName('light-green').length
  expect(lightGreen).toBeTruthy()
})
