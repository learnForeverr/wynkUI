import * as React from 'react';
import {useWindowDimensions} from 'react-native';
import Svg, {Path} from 'react-native-svg';

function WaveShape(props) {
  const {width} = useWindowDimensions();

  return (
    <Svg
      width={width}
      height={224}
      viewBox={`0 0 ${width} 224`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 153.201V0h400v153.201C351.941 196.509 280.176 224 200 224S48.06 196.509 0 153.201z"
        fill="#AE2D2D"
      />
    </Svg>
  );
}

export default WaveShape;
