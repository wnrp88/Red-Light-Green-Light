import UserService from './UserService'
import User from '../models'

it('test UserService', () => {
  const newName = 'test'
  const user = new User()
  user.name = newName

  UserService.save(user)

  const users = UserService.getUsers(user.STORAGE_KEY)
  expect(users?.length).toEqual(1)

  const exist = UserService.findUser(newName)
  expect(exist).not.toBeNull()
})
