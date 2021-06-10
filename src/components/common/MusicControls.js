import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../constants/colors';
import BackwardIcon from '../svgIcons/BackwardIcon';
import ForwardIcon from '../svgIcons/ForwardIcon';
import LoopIcon from '../svgIcons/LoopIcon';
import PauseIcon from '../svgIcons/PauseIcon';
import ShuffleIcon from '../svgIcons/ShuffleIcon';

const MusicControls = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.controlsContainer}>
        <ShuffleIcon width={20} height={20} fill={colors.brandColor} />
        <BackwardIcon width={18} height={18} fill={colors.grayButton} />
        <View style={styles.circleStyle}>
          <PauseIcon width={18} height={18} fill={colors.grayButton} />
        </View>
        <ForwardIcon width={18} height={18} fill={colors.grayButton} />
        <LoopIcon width={20} height={20} fill={colors.lightColor} />
      </View>
    </View>
  );
};

export default MusicControls;

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    alignItems: 'center',
  },
  controlsContainer: {
    height: 80,
    width: '75%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  circleStyle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.brandColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
