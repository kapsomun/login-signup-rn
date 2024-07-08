import { StyleSheet } from 'react-native';
import responsive from '@/utils/size-normalize';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-start',
	},
	contentContainer: {
		paddingHorizontal: responsive.wp(16),
		justifyContent: 'flex-start',
	},

	titleContainer: {
		padding: responsive.wp(16),
		justifyContent: 'flex-start',
	},
	title: {
		fontSize: responsive.w(20),
		fontWeight: 'bold',
	},
	counterContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
});

export default styles;
