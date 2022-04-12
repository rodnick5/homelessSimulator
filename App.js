import React from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import Header from './src/screens/Header/Header';
import Navigator from './src/navigation/Navigator';
import {Provider} from 'react-redux';
import {store} from './src/shared/store';

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Navigator />
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
