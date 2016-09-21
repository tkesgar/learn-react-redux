import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { render } from 'react-dom'

import App from './components/app'
import app from './lib/reducers'

//const store = createStore(app)
const store = createStore(app, window.devToolsExtension && window.devToolsExtension())

render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('app'))
