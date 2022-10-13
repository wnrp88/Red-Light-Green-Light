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
  },
  getAuthenticated () {
    const localStorage = new LocalStorage()
    const name = localStorage.getItem(`${Session.KEY}-name`)

    return {
      name: (name != null) ? name : '',
      autenticate: localStorage.getItem(`${Session.KEY}-autenticate`) === 'true'
    }
  }
}

export default Session
