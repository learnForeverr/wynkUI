import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import MusicSheet from './src/components/common/MusicSheet';

const App = () => {
  return (
    <View style={{width: '100%', height: '100%'}}>
      <StatusBar backgroundColor="black" />
      <MusicSheet />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
