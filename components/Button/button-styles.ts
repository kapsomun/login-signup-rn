import responsive from "@/utils/size-normalize";
import { StyleSheet } from "react-native";
import {Colors} from '../../theme';

const Styles = (contentColor: string, titleColor: string) => {
  return StyleSheet.create({
    container: {
      width: responsive.w(343),
      backgroundColor: contentColor,
      paddingVertical: responsive.hp(13),
      borderRadius: 10,
      borderWidth: 1,
      borderColor: contentColor === Colors.WHITE ? 'gray' : 'transparent',
    },
    title: {
      fontSize: responsive.w(16),
      fontWeight: '700',
      lineHeight: responsive.h(26),
      textAlign: 'center',
      color: titleColor,
    },
    pressed: {
      opacity: 0.8,
      backgroundColor: "rgb(65, 65, 245)",
    },
  });
};
export default Styles;
