import * as React from 'react';
import {useWindowDimensions} from 'react-native';
import Animated, {
  Extrapolate,
  interpolateColor,
  useAnimatedProps,
} from 'react-native-reanimated';
import Svg, {Path} from 'react-native-svg';
import {dragDownVal} from '../../constants/config';

function WaveShape({sheetAnimVal, ...props}) {
  const AnimatedPath = Animated.createAnimatedComponent(Path);

  const {width} = useWindowDimensions();

  const animatedProp = useAnimatedProps(() => {
    return {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M0 153.201V0h400v153.201C351.941 196.509 280.176 224 200 224S48.06 196.509 0 153.201z',
      fill: interpolateColor(
        sheetAnimVal.value,
        [200, dragDownVal],
        ['rgb(174, 45, 45)', 'rgb(20, 23, 26)'],
        // Extrapolate.CLAMP,
      ),
    };
  });

  return (
    <Svg
      width={width}
      height={224}
      viewBox={`0 0 ${width} 224`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <AnimatedPath animatedProps={animatedProp} />
    </Svg>
  );
}

export default WaveShape;
