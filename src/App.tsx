import React, { Suspense, useState } from 'react';
import Loading from './components/loading/Loading';
import 'antd/dist/antd.min.css';
import { Layout } from 'antd';
import './assets/scss/index.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NoMatch from './components/no-match/NoMatch';
import paths from './config';
import UserAutenticateContext, { session } from './contexts/UserAutenticateContext';
import { UserAutenticateContectInterface } from './interfaces';

const App = (): JSX.Element => {
  const [valueSession, setValueSession] = useState(session);

  const handleChangeSession = (newSession: UserAutenticateContectInterface) => {
    setValueSession(newSession);
  };

  return (
    <Layout>
      <Suspense fallback={<Loading/>}>
        <UserAutenticateContext.Provider value={{
          session: valueSession,
          setUserAutenticate: handleChangeSession
        }}>
          <BrowserRouter>
            <Routes>
              <Route path={paths.home.path} element={<paths.home.component/>}/>
              <Route path={paths.game.path} element={<paths.game.component/>}/>
              <Route path={paths.ranking.path} element={<paths.ranking.component/>}/>
              <Route path="*" element={<NoMatch/>}/>
            </Routes>
          </BrowserRouter>
        </UserAutenticateContext.Provider>
      </Suspense>
    </Layout>
  );
};

export default App;
