import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import MainPage from 'pages/MainPage'
import SentListPage from 'pages/SentListPage'
import LoginPage from 'pages/LoginPage'
import GiftPage from 'pages/GiftPage'
import Header from 'components/Header'
import Modal from 'components/modals/Modal'
import CallbackPage from 'pages/CallbackPage'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Modal />
      <Switch>
        <Route path="/main" exact component={MainPage} />
        <Route path="/sent" exact component={SentListPage} />
        <Route
          path="/callback/kakao"
          exact
          render={() => <CallbackPage url="kakao" />}
        />
        <Route
          path="/callback/naver"
          exact
          render={() => <CallbackPage url="naver" />}
        />
        <Route path="/gift" component={GiftPage} />
        <Route path="/" exact component={LoginPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
