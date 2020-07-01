import { useLocalStore } from 'mobx-react-lite';
import React from 'react';
import { createStore } from './store';

const StoreContext = React.createContext(null);

// eslint-disable-next-line react/prop-types
export const DataStoreProvider = ({ children }) => {
  const store = useLocalStore(createStore);

  return <StoreContext.Provider value={store}>{children}. </StoreContext.Provider>;
};

export const useDataStore = () => {
  const store = React.useContext(StoreContext);

  if (!store) {
    throw new Error('useStore must be used within a StoreProvider.');
  }

  return store;
};
