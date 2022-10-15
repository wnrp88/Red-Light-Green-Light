import User from './User'
import UserService from '../services/UserService'

it('test model User', () => {
  const user = new User()
  expect(user.name).toEqual('')
  expect(user.score).toEqual(0)
  expect(user.maxScore).toEqual(0)

  user.score = 10
  expect(user.name).toEqual('')
  expect(user.score).toEqual(10)
  expect(user.maxScore).toEqual(10)

  user.maxScore = 100
  expect(user.name).toEqual('')
  expect(user.score).toEqual(10)
  expect(user.maxScore).toEqual(100)

  const newName = 'test'
  user.name = newName
  expect(user.name).toEqual(newName)
  expect(user.score).toEqual(10)
  expect(user.maxScore).toEqual(100)

  user.save()
  const findUser = UserService.findUser(newName)
  expect(findUser?.name).toEqual(newName)
  expect(findUser?.score).toEqual(10)
  expect(findUser?.maxScore).toEqual(100)

  const toJson = user.toJson()
  expect(toJson.name).toEqual(newName)
  expect(toJson.score).toEqual(10)
  expect(toJson.maxScore).toEqual(100)
})
