import * as React from "react"
import Svg, { Path } from "react-native-svg"

function MusicCallIcon(props) {
  return (
    <Svg
      height={512}
      viewBox="0 0 513.143 513.143"
      width={512}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M194.92 348.14h152.783v50.192H194.92zM115.213 165.868h50.311v152.783h-50.311z" />
      <Path d="M85.213 331.352V165.884c-46.73.345-84.642 38.452-84.642 85.26v55.721c0 113.742 92.536 206.277 206.277 206.277h55.453c46.892 0 85.065-37.992 85.387-84.811H182.193c-53.475.001-96.98-43.504-96.98-96.979zM366.006 0c-80.817 0-146.565 65.749-146.565 146.565v150.96l76.81-22.037c21.341 11.56 45.317 17.642 69.755 17.642 80.817 0 146.565-65.749 146.565-146.565S446.823 0 366.006 0zm-47.508 161.169h-29.912v-29.91h29.912zm59.825 0H348.41v-29.91h29.913zm59.824 0h-29.912v-29.91h29.912z" />
    </Svg>
  )
}

export default MusicCallIcon
