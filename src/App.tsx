import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import MainContainer from 'containers/MainContainer'
import SentListContainer from 'containers/SentListContainer'
import LoginContainer from 'containers/LoginContainer'
import GiftContainer from 'containers/GiftContainer'
import KakaoLoginContainer from 'containers/KakaoLoginContainer'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/main" exact component={MainContainer} />
        <Route path="/gift" component={GiftContainer} />
        <Route path="/sent" exact component={SentListContainer} />
        <Route path="/login/kakao" exact component={KakaoLoginContainer} />
        <Route path="/" exact component={LoginContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
