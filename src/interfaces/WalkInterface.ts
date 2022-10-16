import User from '../models'

interface WalkInterface {
  trafficLight: boolean
  user: User
  setUser: (user: User) => void
}

export default WalkInterface
