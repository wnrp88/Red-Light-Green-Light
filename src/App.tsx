import React, { Suspense } from 'react'
import './assets/scss/index.scss'
import Loading from './components/loading/Loading'
import 'antd/dist/antd.min.css'
import { Layout } from 'antd'

const Home = React.lazy(async () => await import('./modules/home/Home'))

const App = (): JSX.Element => {
  return (
    <Layout>
      <Suspense fallback={<Loading/>}>
        <Home/>
      </Suspense>
    </Layout>
  )
}

export default App
