import UserInterface from '../interfaces'

export default class LocalStorage {
  private _localStorage: Storage

  get localStorage (): Storage {
    return this._localStorage
  }

  set localStorage (value: Storage) {
    this._localStorage = value
  }

  constructor () {
    this._localStorage = window.localStorage
  }

  public setItem (key: string, value: string): void {
    this.localStorage.setItem(key, value)
  }

  public getItem (key: string): string | null {
    return this.localStorage.getItem(key)
  }

  public removeItem (key: string): void {
    this.localStorage.removeItem(key)
  }

  public clear (): void {
    this.localStorage.clear()
  }

  public setUsers (key: string, value: UserInterface[]): void {
    this.setItem(key, JSON.stringify(value))
  }

  public getUsers (key: string): UserInterface[] | null {
    const item = this.getItem(key)
    return (item != null) ? JSON.parse(item) : null
  }

  public hasUsers (key: string): boolean {
    return this.getUsers(key) !== null
  }
}
