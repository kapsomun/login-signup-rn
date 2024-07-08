import * as React from 'react';
import {ClipPath, Defs, G, Path, Rect, Svg, SvgProps} from 'react-native-svg';
 
const UkraineSvg = (props: SvgProps) => (
  <Svg width="20" height="21" viewBox="0 0 20 21" fill="none" {...props}>
    <G clip-path="url(#clip0_1186_2935)">
      <Path
        d="M10 20.5C15.5228 20.5 20 16.0228 20 10.5C20 4.97715 15.5228 0.5 10 0.5C4.47715 0.5 0 4.97715 0 10.5C0 16.0228 4.47715 20.5 10 20.5Z"
        fill="#FFDA44"
      />
      <Path
        d="M0 10.5C0 4.97719 4.47719 0.5 10 0.5C15.5228 0.5 20 4.97719 20 10.5"
        fill="#338AF3"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_1186_2935">
        <Rect
          width="20"
          height="20"
          fill="white"
          transform="translate(0 0.5)"
        />
      </ClipPath>
    </Defs>
  </Svg>
);
 
export default UkraineSvg;