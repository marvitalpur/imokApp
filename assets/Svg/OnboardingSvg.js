import React from 'react';
import Svg, {
  G,
  Path,
  Line,
  Defs,
  Stop,
  Circle,
  LinearGradient,
  Rect,
} from 'react-native-svg';
const Search = () => {
  return (
    <>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width="18.414"
        height="18.414"
        viewBox="0 0 18.414 18.414">
        <G
          id="Icon_feather-search"
          data-name="Icon feather-search"
          transform="translate(-3.5 -3.5)">
          <Path
            id="Path_134"
            data-name="Path 134"
            d="M18.722,11.611A7.111,7.111,0,1,1,11.611,4.5,7.111,7.111,0,0,1,18.722,11.611Z"
            fill="none"
            stroke="#1e0203"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          />
          <Path
            id="Path_135"
            data-name="Path 135"
            d="M28.842,28.842l-3.867-3.867"
            transform="translate(-8.342 -8.342)"
            fill="none"
            stroke="#1e0203"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          />
        </G>
      </Svg>
    </>
  );
};

const PlusW = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="18.07"
      height="18.07"
      viewBox="0 0 18.07 18.07">
      <Path
        id="Icon_ionic-ios-add"
        data-name="Icon ionic-ios-add"
        d="M25.91,16.875H19.125V10.09a1.125,1.125,0,0,0-2.25,0v6.785H10.09a1.125,1.125,0,0,0,0,2.25h6.785V25.91a1.125,1.125,0,0,0,2.25,0V19.125H25.91a1.125,1.125,0,0,0,0-2.25Z"
        transform="translate(-8.965 -8.965)"
        fill="#fff"
      />
    </Svg>
  );
};

export {Search, PlusW};
