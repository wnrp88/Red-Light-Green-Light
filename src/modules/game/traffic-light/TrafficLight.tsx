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

  const calcTrafficLightGreen = (score: number): number => Math.max(10000 - score * 100, 2000) + Functions.round(-1500, 1500)

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
      timeout !== null && clearTimeout(timeout)
    }
  }, [trafficLight])

  return trafficLight
    ? <img src="/images/Traffic_Light_Green_clip_art.svg" className="img-traffic-light"/>
    : <img src="/images/Traffic_Light_Red_clip_art.svg" className="img-traffic-light"/>
}

export default TrafficLight
