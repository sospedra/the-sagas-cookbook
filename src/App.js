import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { Normalize } from 'styled-normalize'
import { Provider } from 'react-redux'
import Carts from './Carts'
import Watchman from './Watchman'
import store from './store'

const Global = createGlobalStyle`
  html, body {
    font-family: sans-serif;
    font-size: 100%;
  }

  * {
    box-sizing: border-box;
  }
`

const App = () => {
  return (
    <Provider store={store}>
      <Normalize />
      <Global />
      <Watchman />
      <Carts />
    </Provider>
  )
}

export default App
