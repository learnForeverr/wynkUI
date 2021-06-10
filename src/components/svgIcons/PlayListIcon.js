import * as React from "react"
import Svg, { Path } from "react-native-svg"

function PlayListIcon(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 320" {...props}>
      <Path d="M0 96h256v42.667H0zM0 10.667h256v42.667H0zM0 181.333h170.667V224H0zM213.333 181.333v128l106.667-64z" />
    </Svg>
  )
}

export default PlayListIcon
