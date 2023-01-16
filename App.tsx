import React from 'react';

import {Provider as ReduxProvider} from 'react-redux';
import store from './src/store/configureStore';
import {Router} from './src/routes/Router';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </ReduxProvider>
  );
};

export default App;
