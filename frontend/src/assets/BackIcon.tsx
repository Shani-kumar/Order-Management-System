import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";
const BackIcon = () => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
   
  >
    <G clipPath="url(#clip0_8279_279)">
      <Path
        d="M15.8318 9.16563H6.52344L10.5901 5.09896C10.9151 4.77396 10.9151 4.24062 10.5901 3.91562C10.2651 3.59063 9.7401 3.59063 9.4151 3.91562L3.92344 9.40729C3.59844 9.73229 3.59844 10.2573 3.92344 10.5823L9.4151 16.074C9.7401 16.399 10.2651 16.399 10.5901 16.074C10.9151 15.749 10.9151 15.224 10.5901 14.899L6.52344 10.8323H15.8318C16.2901 10.8323 16.6651 10.4573 16.6651 9.99896C16.6651 9.54063 16.2901 9.16563 15.8318 9.16563Z"
        fill="#616161"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_8279_279">
        <Rect width={20} height={20} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default BackIcon;
