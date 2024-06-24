import responsive from "@/utils/size-normalize";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    buttonContainer: {
      width: responsive.wp(35),
      height: responsive.hp(35),
      backgroundColor: '#C9DFFF',
      borderRadius: responsive.w(50),
      alignItems: 'center',
      justifyContent: 'center',
    
    },
    
    pressed: {
      opacity: 0.3,
    },
  });


export default styles;
