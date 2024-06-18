import React, {FC, useMemo} from 'react';
import {Pressable, Text, StyleProp, TextStyle, ViewStyle} from 'react-native';
 
import {Colors} from '../../theme';
import Styles from './styles';
 

 
interface IButton {
  handlePress: (value?: any) => void;
  title: string;
  titleStyles?: StyleProp<TextStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
  color?: 'black' | 'white' | 'blue';
  disabled?: boolean;
}
 
const Button: FC<IButton> = ({
  handlePress,
  title,
  titleStyles,
  buttonStyle,
  color = Colors.BLACK,
  disabled,
}) => {
  const contentColor = useMemo(() => {
    switch (color) {
      case 'blue':
        return Colors.MAIN_BLUE;
      case 'black':
        return Colors.BLACK;
      case 'white':
        return Colors.WHITE;
      default:
        return Colors.BLACK;
    }
  }, [color]);
 
  const titleColor = useMemo(() => {
    switch (color) {
      case 'black':
        return Colors.WHITE;
      case 'blue':
        return Colors.WHITE;
      case 'white':
        return Colors.BLACK_TEXT;
      default:
        return Colors.BLACK_TEXT;
    }
  }, [color]);
 
  const styles = Styles(contentColor, titleColor);
 
  return (
    <Pressable
      onPress={handlePress}
      style={[styles.container, buttonStyle]}
      disabled={disabled}>
      <Text style={[styles.title, titleStyles]}>{title}</Text>
    </Pressable>
  );
};
export default Button;