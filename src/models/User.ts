import UserInterface from '../interfaces'
import UserService from '../services/UserService'

export default class User {
  private _name: string
  private _score: number
  private _maxScore: number
  private readonly userService = UserService
  public readonly STORAGE_KEY: string = 'users'
  private _key: string

  constructor (user?: UserInterface) {
    if (user) {
      this._name = user.name
      this._key = user.name
      this._score = user.score
      this._maxScore = user.maxScore
    } else {
      this._name = ''
      this._key = ''
      this._score = 0
      this._maxScore = 0
    }
  }

  get key (): string {
    return this._key
  }

  set key (value: string) {
    this._key = value
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

    if (value > this.maxScore) {
      this.maxScore = value
      this.save()
    }
  }

  public toWalk (): void {
    this.score = this.score + 1
    this.save()
  }

  public backWalk (): void {
    if (this.score > 0) {
      this.score = this.score - 1
      this.save()
    }
  }

  public lost (): void {
    this.score = 0
    this.save()
  }

  get maxScore (): number {
    return this._maxScore
  }

  set maxScore (value: number) {
    this._maxScore = value
  }

  public save () {
    this.userService.save(this)
  }

  public toJson (): UserInterface {
    return {
      name: this.name,
      score: this.score,
      maxScore: this.maxScore
    }
  }
}
