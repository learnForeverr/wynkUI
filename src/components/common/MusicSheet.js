import React from 'react';
import {StyleSheet, View} from 'react-native';
import MusicControls from './MusicControls';
import MusicSheetHeader from './MusicSheetHeader';
import NextSongDetails from './NextSongDetails';
import OtherOption from './OtherOption';
import ProgressBar from './ProgressBar';

const MusicSheet = () => {
  return (
    <View style={styles.musicSheetContainer}>
      <MusicSheetHeader />
      <ProgressBar />
      <MusicControls />
      <OtherOption />
      <NextSongDetails />
    </View>
  );
};

export default MusicSheet;

const styles = StyleSheet.create({
  musicSheetContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'black',
  },
});
