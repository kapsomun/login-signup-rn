import {Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp2dp,
  heightPercentageToDP as hp2dp,
} from 'react-native-responsive-screen';
const designW = 375;
const designH = 812;
const windowDimensions = Dimensions.get('window');
/**
* Width-Percentage
* Converts width dimension to percentage
* 375, 812 - design were made using this scale
* @param dimension
* @returns {string}
*/
const wp = (dimension: number) => {
  return wp2dp((dimension / designW) * 100 + '%');
};
/**
* Height-Percentage
* Converts width dimension to percentage
* * 375, 812 - design were made using this scale
* @param dimension
* @returns {string}
*/
export const hp = (dimension: number) => {
  return hp2dp((dimension / designH) * 100 + '%');
};
const h = (dimension: number) => {
  const dp = windowDimensions.height;
  const k = dp / designH;
  const rounded = Number(dimension * k).toFixed(0);
  return Number(rounded);
};
const w = (dimension: number) => {
  const dp = windowDimensions.width;
  const k = dp / designW;
  const rounded = Number(dimension * k).toFixed(0);
  return Number(rounded);
};
export default {
  wp,
  hp,
  w,
  h,
};