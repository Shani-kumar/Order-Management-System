import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";
const Unticked = () => (
  <Svg
    width={24}
    height={25}
    viewBox="0 0 24 25"
    fill="none"
   
  >
    <G clipPath="url(#clip0_9148_938)">
      <Path
        d="M12 4.75C7.71875 4.75 4.25 8.21875 4.25 12.5C4.25 16.7812 7.71875 20.25 12 20.25C16.2812 20.25 19.75 16.7812 19.75 12.5C19.75 8.21875 16.2812 4.75 12 4.75ZM12 18.75C8.53125 18.75 5.75 15.9688 5.75 12.5C5.75 9.0625 8.53125 6.25 12 6.25C15.4375 6.25 18.25 9.0625 18.25 12.5C18.25 15.9688 15.4375 18.75 12 18.75Z"
        fill="#706E6B"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_9148_938">
        <Rect
          width={24}
          height={24}
          fill="white"
          transform="translate(0 0.5)"
        />
      </ClipPath>
    </Defs>
  </Svg>
);
export default Unticked;
