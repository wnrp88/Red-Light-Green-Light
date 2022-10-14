import React from 'react'

const Home = React.lazy(async () => await import('../modules/home/Home'))
const Game = React.lazy(async () => await import('../modules/game/Game'))

const paths = {
  home: {
    path: '/',
    component: Home
  },
  game: {
    path: '/game',
    component: Game
  }
}

export default paths
