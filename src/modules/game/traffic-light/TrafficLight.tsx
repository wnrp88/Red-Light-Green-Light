import React, { useEffect } from 'react'
import Functions from '../../../libs/Functions'
import { TrafficLightInterface } from '../../../interfaces'

const TrafficLight = (props: TrafficLightInterface) => {
  const {
    score,
    trafficLight,
    setTrafficLight
  } = props

  const timeTrafficLightRed = 3000
  const greenLightMaxDuration = 10000
  const greenLightMinDuration = 2000
  const greenLightDecrementByScore = 100
  const greenLightRandomTime = 1500

  const calcTrafficLightGreen = (score: number): number => Math.max(greenLightMaxDuration - score * greenLightDecrementByScore, greenLightMinDuration) + Functions.random(greenLightRandomTime * -1, greenLightRandomTime)

  const changeGame = (time: number) => {
    return setTimeout(() => {
      setTrafficLight(!trafficLight)
    }, time)
  }

  useEffect(() => {
    let timeout: null | NodeJS.Timeout = null
    if (!trafficLight) {
      timeout = changeGame(timeTrafficLightRed)
    } else {
      const timeTrafficLightGreen = calcTrafficLightGreen(score)
      timeout = changeGame(timeTrafficLightGreen)
    }
    return () => {
      if (timeout !== null) {
        clearTimeout(timeout)
      }
    }
  }, [trafficLight])

  return trafficLight
    ? <img src="/images/Traffic_Light_Green_clip_art.svg" className="img-traffic-light light-green"/>
    : <img src="/images/Traffic_Light_Red_clip_art.svg" className="img-traffic-light light-red"/>
}

export default TrafficLight
