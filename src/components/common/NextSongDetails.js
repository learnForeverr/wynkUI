import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../constants/colors';
import {songTwoInfo} from '../../constants/config';
import RightArrow from '../svgIcons/RightArrow';

const NextSongDetails = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.textContainer}>
        <Text
          style={{color: colors.grayButton, fontSize: 19, fontWeight: 'bold'}}>
          Up Next
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center', width: 70}}>
          <Text
            style={{
              color: colors.brandColor,
              marginRight: 5,
              fontWeight: 'bold',
            }}>
            Queue
          </Text>
          <RightArrow width={12} height={12} fill={colors.brandColor} />
        </View>
      </View>
      <View style={styles.nextSongDetailsContainer}>
        <View
          style={{
            width: '25%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={{uri: songTwoInfo.posterImage}}
            style={{width: 50, height: 50, borderRadius: 4}}
            resizeMode="cover"
          />
        </View>
        <View style={{width: '75%'}}>
          <Text numberOfLines={1} style={{color: colors.grayButton}}>
            {songTwoInfo.songTitle}
          </Text>
          <Text numberOfLines={1} style={{fontSize: 12, color: colors.lightColor, marginTop: 2}}>
            {songTwoInfo.songTitle}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default NextSongDetails;

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 15,
  },
  nextSongDetailsContainer: {
    height: 70,
    width: '90%',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 8,
    backgroundColor: colors.darkColor,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    height: 50,
    alignItems: 'center',
  },
});
