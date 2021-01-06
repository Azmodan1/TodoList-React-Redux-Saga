import React from 'react'
import { render } from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { applyMiddleware, createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import { rootReducer } from './redux/RootReducer'
import createSagaMiddleWare from 'redux-saga'
import { watcher } from './redux/saga'
import { composeWithDevTools } from 'redux-devtools-extension'

const sagaMiddleWare = createSagaMiddleWare()
const middleWareEnhancer = composeWithDevTools(applyMiddleware(sagaMiddleWare))

const store = createStore(rootReducer, compose(middleWareEnhancer))
sagaMiddleWare.run(watcher)
const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

render(app, document.getElementById('root'))

serviceWorker.unregister()
