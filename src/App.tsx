import React, { Suspense } from 'react'
import './assets/scss/index.scss'
import Loading from './components/loading/Loading'
import 'antd/dist/antd.min.css'
import { Layout } from 'antd'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NoMatch from './components/no-match/NoMatch'
import paths from './config'

const App = (): JSX.Element => {
  return (
    <Layout>
      <Suspense fallback={<Loading/>}>
        <BrowserRouter>
          <Routes>
            <Route path={paths.home.path} element={<paths.home.component/>}/>
            <Route path={paths.game.path} element={<paths.game.component/>}/>
            <Route path={paths.logout.path} element={<paths.logout.component/>}/>
            <Route path="*" element={<NoMatch/>}/>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </Layout>
  )
}

export default App
