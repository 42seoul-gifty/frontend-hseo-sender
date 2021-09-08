import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import MainPage from 'pages/MainPage'
import SentListPage from 'pages/SentListPage'
import LoginPage from 'pages/LoginPage'
import KakaoLoginPage from 'pages/KakaoLoginPage'

import GiftPage from 'pages/GiftPage'
import Header from 'components/Header'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/main" exact component={MainPage} />
        <Route path="/sent" exact component={SentListPage} />
        {/*<Route path="/login/kakao" exact component={KakaoLoginPage} />*/}
        <Route path="/callback/kakao" exact component={KakaoLoginPage} />
        <Route path="/gift" component={GiftPage} />
        <Route path="/" exact component={LoginPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
