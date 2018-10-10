import React from 'react'
import ReactDOM from 'react-dom'
import rootReducer from './reducers'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './components/App'
import styles from '../css/styles.css'


const store = createStore(
  rootReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('app')
)
