import LocalStorage from './LocalStorage'

const Session = {
  KEY: 'session-user',
  isAutenticate: (): boolean => {
    const localStorage = new LocalStorage()
    const autentiate = localStorage.getItem(`${Session.KEY}-autenticate`)
    return autentiate != null && autentiate === 'true'
  },
  autenticate: (name: string): void => {
    const localStorage = new LocalStorage()
    localStorage.setItem(`${Session.KEY}-autenticate`, 'true')
    localStorage.setItem(`${Session.KEY}-name`, name)
  },
  logout () {
    const localStorage = new LocalStorage()
    localStorage.setItem(`${Session.KEY}-autenticate`, 'false')
    localStorage.setItem(`${Session.KEY}-name`, '')
  }
}

export default Session
