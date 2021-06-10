import * as React from "react"
import Svg, { Path } from "react-native-svg"

function PauseIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={45.975}
      height={45.975}
      viewBox="0 0 45.975 45.975"
      {...props}
    >
      <Path d="M13.987 0a5 5 0 00-5 5v35.975c0 2.763 2.238 5 5 5s5-2.238 5-5V5c0-2.762-2.237-5-5-5zM31.987 0a5 5 0 00-5 5v35.975c0 2.762 2.238 5 5 5s5-2.238 5-5V5a5 5 0 00-5-5z" />
    </Svg>
  )
}

export default PauseIcon
