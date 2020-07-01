import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
import { App } from './components/App/App';
import * as serviceWorker from './serviceWorker';
import { DataStoreProvider } from './context'
import 'mobx-react-lite/batchingForReactDom'

ReactDOM.render(
  <DataStoreProvider>
    <App />
  </DataStoreProvider>,
    document.getElementById('root')
);

serviceWorker.unregister();
