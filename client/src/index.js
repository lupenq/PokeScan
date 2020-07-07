import React from 'react'
import ReactDOM from 'react-dom'
import './index.sass'
import { App } from './App'
import * as serviceWorker from './serviceWorker'
import { DataStoreProvider } from './context'
import 'mobx-react-lite/batchingForReactDom'

ReactDOM.render(
  <DataStoreProvider>
    <App/>
  </DataStoreProvider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()