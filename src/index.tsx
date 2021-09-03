import React from 'react'
import ReactDOM from 'react-dom'
import { Global } from '@emotion/react'
import { Provider } from 'react-redux'
import store from 'store/configureStore'
import { GlobalStyles } from 'styles/GlobalStyles'
import App from './App'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Global styles={GlobalStyles} />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
