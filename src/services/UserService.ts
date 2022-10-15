import UserInterface from '../interfaces'
import User from '../models/User'
import LocalStorage from '../libs/LocalStorage'

const UserService = {
  localStorage: new LocalStorage(),

  save: (user: User) => {
    const users = UserService.getUsers(user.KEY)
    if (users !== null) {
      const i = users?.findIndex((u: any) => u.name === user.name)
      if (i >= 0) {
        users[i] = user.toJson()
      } else {
        users.push(user.toJson())
      }
      UserService.setUsers(user.KEY, [...users])
    } else {
      const users: UserInterface[] = []
      users.push(user.toJson())
      UserService.setUsers(user.KEY, users)
    }
  },

  findUser: (name: string): null | User => {
    const user = new User()
    const users: UserInterface[] | null = UserService.getUsers(user.KEY)

    if (users !== null) {
      const i = users.findIndex((u: any) => u.name === name)
      if (i >= 0) {
        return new User(users[i])
      }
    }

    return null
  },

  setUsers: (key: string, value: UserInterface[]): void => {
    UserService.localStorage.setItem(key, JSON.stringify(value))
  },

  getUsers: (key: string): UserInterface[] | null => {
    const item = UserService.localStorage.getItem(key)
    return (item !== null) ? JSON.parse(item) : null
  }
}

export default UserService
