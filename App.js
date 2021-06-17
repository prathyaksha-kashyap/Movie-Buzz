/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import RootNavigator from '@navigation';
import {Loader} from '@components';

const App = () => {
  return (
    <View style={styles.container}>
      <RootNavigator />
      <Loader />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
