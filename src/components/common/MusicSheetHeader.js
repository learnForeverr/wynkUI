import React from 'react';
import {
  TouchableWithoutFeedback,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import {colors} from '../../constants/colors';
import {dragDownVal, songOneInfo, songTwoInfo} from '../../constants/config';
import PlayButton from '../svgIcons/PlayButton';
import RightArrow from '../svgIcons/RightArrow';
import WaveShape from '../svgIcons/WaveShape';

const MusicSheetHeader = ({sheetAnimVal}) => {
  const {width} = useWindowDimensions();

  const aniamtedImageStyle = useAnimatedStyle(() => {
    return {
      width: interpolate(
        sheetAnimVal.value,
        [0, dragDownVal],
        [(width * 65) / 100, 60],
        Extrapolate.CLAMP,
      ),
      height: interpolate(
        sheetAnimVal.value,
        [0, dragDownVal],
        [240, 60],
        Extrapolate.CLAMP,
      ),
      borderRadius: interpolate(
        sheetAnimVal.value,
        [0, dragDownVal],
        [8, 0],
        Extrapolate.CLAMP,
      ),
      transform: [
        {
          translateX: interpolate(
            sheetAnimVal.value,
            [0, dragDownVal],
            [0, -((width * 32) / 100 - 60)],
            Extrapolate.CLAMP,
          ),
        },
        {
          translateY: interpolate(
            sheetAnimVal.value,
            [0, dragDownVal],
            [0, -40],
            Extrapolate.CLAMP,
          ),
        },
      ],
    };
  });

  const textAnimatedStyle = useAnimatedStyle(() => {
    return {
      width: '65%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      opacity: interpolate(
        sheetAnimVal.value,
        [0, dragDownVal],
        [1, 0],
        Extrapolate.CLAMP,
      ),
    };
  });

  const songAnimatedValue = useAnimatedStyle(() => {
    return {
      width: '100%',
      alignItems: 'flex-end',
      position: 'absolute',
      top: 10,
      opacity: interpolate(
        sheetAnimVal.value,
        [dragDownVal / 2, dragDownVal],
        [0, 1],
        Extrapolate.CLAMP,
      ),
    };
  });

  return (
    <View style={styles.musicHeader}>
      <Animated.View style={textAnimatedStyle}>
        <Text
          numberOfLines={1}
          style={{
            color: '#ed8a42',
            fontSize: 16,
            fontWeight: 'bold',
            marginRight: 5,
          }}>
          {songOneInfo.songTitle}
        </Text>
        <View style={{marginBottom: -2}}>
          <RightArrow width={14} height={14} fill="#ed8a42" />
        </View>
      </Animated.View>
      <View style={{width: '65%'}}>
        <Animated.Image
          source={{uri: songOneInfo.posterImage}}
          style={aniamtedImageStyle}
          resizeMode="cover"
        />
      </View>
      <View style={styles.curveStyle}>
        <WaveShape sheetAnimVal={sheetAnimVal} />
      </View>
      <Animated.View style={songAnimatedValue}>
        <TouchableWithoutFeedback
          onPress={() => (sheetAnimVal.value = withTiming(0))}>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              width: '80%',
            }}>
            <View>
              <Text numberOfLines={1} style={{color: colors.grayButton}}>
                {songOneInfo.songTitle}
              </Text>
              <Text
                numberOfLines={1}
                style={{fontSize: 12, color: colors.lightColor, marginTop: 2}}>
                {songOneInfo.songTitle}
              </Text>
            </View>
            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: colors.brandColor,
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 10,
              }}>
              <PlayButton width={16} height={16} fill={colors.white} />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Animated.View>
    </View>
  );
};

export default MusicSheetHeader;

const styles = StyleSheet.create({
  musicHeader: {
    alignItems: 'center',
    // justifyContent: 'center',
    height: 300,
  },
  curveStyle: {
    width: '100%',
    position: 'absolute',
    height: '100%',
    zIndex: -10,
    borderRadius: 50,
  },
});
