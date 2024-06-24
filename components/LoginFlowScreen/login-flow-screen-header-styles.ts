import {StyleSheet} from 'react-native';

import responsive from '../../utils/size-normalize';
import {Colors} from '../../theme';

const styles = StyleSheet.create({
  container: {
    width: responsive.wp(375),
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingLeft: responsive.wp(16),
    borderBottomColor: Colors.GRAY_BORDER,
    borderBottomWidth: responsive.hp(1),
    paddingBottom: responsive.hp(11),
  },
});

export default styles;
