import User from '../models'

interface WalkInterface {
  trafficLight: boolean
  setTrafficLight: (trafficLight: boolean) => void
  user: User
  setUser: (user: User) => void
}

export default WalkInterface
