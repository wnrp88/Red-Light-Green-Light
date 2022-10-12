import React from 'react'

const Home = React.lazy(async () => await import('../modules/home/Home'))
const Game = React.lazy(async () => await import('../modules/game/Game'))
const Logout = React.lazy(async () => await import('../modules/logout/Logout'))

const paths = {
  home: {
    path: '/',
    component: Home
  },
  game: {
    path: '/game',
    component: Game
  },
  logout: {
    path: '/logout',
    component: Logout
  }
}

export default paths
