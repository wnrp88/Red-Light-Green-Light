import LocalStorage from '../libs/LocalStorage'
import UserInterface from '../interfaces'

export default class User {
  private _name: string
  private _score: number
  private _maxScore: number
  private readonly localStorage: LocalStorage
  private readonly KEY: string = 'users'

  constructor (user?: UserInterface) {
    this.localStorage = new LocalStorage()

    if (user != null) {
      this._name = user.name
      this._score = user.score
      this._maxScore = user.maxScore
    } else {
      this._name = ''
      this._score = 0
      this._maxScore = 0
    }
  }

  get name (): string {
    return this._name
  }

  set name (value: string) {
    this._name = value
  }

  get score (): number {
    return this._score
  }

  set score (value: number) {
    this._score = value
  }

  get maxScore (): number {
    return this._maxScore
  }

  set maxScore (value: number) {
    this._maxScore = value
  }

  // public static find (name: string): null | User {
  //   const users: UserInterface[] | null = self.localStorage.getUsers(this.KEY)
  //   if (users != null) {
  //     const i = users.findIndex((u: any) => u.name === name)
  //     if (i !== undefined) {
  //       return new User(users[i])
  //     }
  //   }
  //
  //   return null
  // }

  public save () {
    const users = this.localStorage.getUsers(this.KEY)
    if (users != null) {
      const i = users?.findIndex((u: any) => u.name === this.name)
      if (i !== -1) {
        users[i] = this.toJson()
      } else {
        users.push(this.toJson())
      }
      this.localStorage.setUsers(this.KEY, [...users])
    } else {
      const users: UserInterface[] = []
      users.push(this.toJson())
      this.localStorage.setUsers(this.KEY, users)
    }
  }

  private toJson (): UserInterface {
    return {
      name: this.name,
      score: this.score,
      maxScore: this.maxScore
    }
  }
}
