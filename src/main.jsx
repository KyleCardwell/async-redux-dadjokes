import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { applyMiddleware, createStore } from 'redux'
import titleReducer from './reducers/titleReducer.js'
import logger from 'redux-logger'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

// Redux Step 1: create the store
const store = createStore(titleReducer, applyMiddleware(logger, thunk))

// Redux Step 2: Provide the store

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
