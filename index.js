import React from 'react';
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import {Provider as StoreProvider} from 'react-redux';
import store from '@redux/CreateStore';
import {PersistGate} from 'redux-persist/es/integration/react';
import {persistStore} from 'redux-persist';

import App from './App';
import {name as appName} from './app.json';
const persistor = persistStore(store);

const MOVIEBUZZ = () => (
  <StoreProvider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </StoreProvider>
);

AppRegistry.registerComponent(appName, () => MOVIEBUZZ);
