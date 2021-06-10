import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../constants/colors';

const ProgressBar = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.textStlye}>04.56</Text>
      </View>
      <View style={styles.progressContainer}>
        <View style={styles.progressTotal} />
        <View style={styles.progress}>
          <View style={styles.dotStyle} />
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textStlye}>05.42</Text>
      </View>
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
  progressContainer: {
    width: '65%',
    height: 50,
    justifyContent: 'center',
  },
  progressTotal: {
    height: 3,
    width: '100%',
    backgroundColor: colors.grayButton,
    borderRadius: 4,
  },
  progress: {
    height: 3,
    width: '90%',
    backgroundColor: colors.boldColor,
    borderRadius: 4,
    position: 'absolute',
    backgroundColor: colors.boldColor,
  },
  dotStyle: {
    position: 'absolute',
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: colors.boldColor,
    right: -2,
    top: -2,
  },
  textContainer: {
    height: 50,
    justifyContent: 'center',
  },
  textStlye: {
    color: colors.boldColor,
    fontSize: 12,
  },
});
