import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";
const Ticked = () => (
  <Svg
    width={24}
    height={25}
    viewBox="0 0 24 25"
    fill="none"
    
  >
    <G clipPath="url(#clip0_9148_1174)">
      <Path
        d="M19.75 12.5C19.75 8.25 16.25 4.75 12 4.75C7.71875 4.75 4.25 8.25 4.25 12.5C4.25 16.7812 7.71875 20.25 12 20.25C16.25 20.25 19.75 16.7812 19.75 12.5ZM11.0938 16.625C10.9062 16.8125 10.5625 16.8125 10.375 16.625L7.125 13.375C6.9375 13.1875 6.9375 12.8438 7.125 12.6562L7.84375 11.9688C8.03125 11.75 8.34375 11.75 8.53125 11.9688L10.75 14.1562L15.4375 9.46875C15.625 9.25 15.9375 9.25 16.125 9.46875L16.8438 10.1562C17.0312 10.3438 17.0312 10.6875 16.8438 10.875L11.0938 16.625Z"
        fill="#F15927"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_9148_1174">
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
export default Ticked;
