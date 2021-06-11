import React from 'react';
import {StyleSheet, View} from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {dargRange, dragDownVal} from '../../constants/config';
import MusicControls from './MusicControls';
import MusicSheetHeader from './MusicSheetHeader';
import NextSongDetails from './NextSongDetails';
import OtherOption from './OtherOption';
import ProgressBar from './ProgressBar';

const MusicSheet = () => {
  const sheetAnimVal = useSharedValue(0);

  const handleGesture = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.y = sheetAnimVal.value;
    },
    onActive: (event, ctx) => {
      sheetAnimVal.value = event.translationY + ctx.y;
    },
    onEnd: (event, ctx) => {
      if (event.translationY > dargRange) {
        sheetAnimVal.value = withTiming(dragDownVal);
      } else if (event.translationY < -dargRange) {
        sheetAnimVal.value = withTiming(0);
      } else {
        sheetAnimVal.value = withTiming(ctx.y)
      }
    },
  });

  const aniamtedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            sheetAnimVal.value,
            [0, dragDownVal], //inputrange
            [0, dragDownVal], //outputRange
            Extrapolate.CLAMP,
          ),
        },
      ],
    };
  });

  return (
    <PanGestureHandler onGestureEvent={handleGesture}>
      <Animated.View style={[styles.musicSheetContainer, aniamtedStyle]}>
        <MusicSheetHeader sheetAnimVal={sheetAnimVal} />
        <ProgressBar />
        <MusicControls />
        <OtherOption />
        <NextSongDetails />
      </Animated.View>
    </PanGestureHandler>
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
