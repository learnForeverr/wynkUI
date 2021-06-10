import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../constants/colors';
import HeartIcon from '../svgIcons/HeartIcon';
import MoreIcon from '../svgIcons/MoreIcon';
import MusicCallIcon from '../svgIcons/MusicCallIcon';
import PlayListIcon from '../svgIcons/PlayListIcon';
import SuccessCheck from '../svgIcons/SuccessCheck';

const OtherOption = () => {
  const style = {
    alignItems: 'center',
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.otherOptionContainer}>
        <View style={style}>
          <HeartIcon width={20} height={20} fill={colors.grayButton} />
          <Text style={styles.commonTextStyle}>Like</Text>
        </View>
        <View style={style}>
          <PlayListIcon width={20} height={20} fill={colors.grayButton} />
          <Text style={styles.commonTextStyle}>Playlist</Text>
        </View>
        <View style={style}>
          <SuccessCheck width={20} height={20} fill={colors.grayButton} />
          <Text style={styles.commonTextStyle}>Download</Text>
        </View>
        <View style={style}>
          <MusicCallIcon width={20} height={20} fill={colors.grayButton} />
          <Text style={styles.commonTextStyle}>Request HT</Text>
        </View>
        <View style={style}>
          <MoreIcon width={20} height={20} fill={colors.grayButton} />
          <Text style={styles.commonTextStyle}>More</Text>
        </View>
      </View>
    </View>
  );
};

export default OtherOption;

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 15,
  },
  otherOptionContainer: {
    height: 70,
    width: '90%',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 8,
    backgroundColor: colors.darkColor,
  },
  commonTextStyle: {
    fontSize: 11,
    color: colors.lightColor,
    marginTop: 5,
  },
});
