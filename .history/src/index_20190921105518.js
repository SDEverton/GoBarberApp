import React from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {StatusBar} from 'react-native';
import CodePush from 'react-native-code-push';

import './config/ReactotronConfig';

import {store, persistor} from './store';
import App from './App';

const Index = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
        <App />
      </PersistGate>
    </Provider>
  );
};

export default CodePush({
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
})(Index);
