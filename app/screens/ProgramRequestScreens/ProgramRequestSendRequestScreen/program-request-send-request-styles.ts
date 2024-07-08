import { StyleSheet } from 'react-native';
import responsive from '@/utils/size-normalize';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-start',
		paddingBottom: responsive.hp(50)
	},
	contentContainer: {
		paddingHorizontal: responsive.wp(16),
		justifyContent: 'flex-start',
	},

	titleContainer: {
		paddingVertical: responsive.wp(16),
		justifyContent: 'flex-start',
	},
	title: {
		fontSize: responsive.w(20),
		fontWeight: 'bold',
	},
	counterContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: responsive.hp(16)
	},
	counterTextBox: {
		justifyContent: 'center',
	},
	counterText: {
		fontSize: responsive.w(16),
		lineHeight: responsive.h(16),
		fontWeight: 'bold',
	},
	counterSubText: {
		fontSize: responsive.w(14),
		lineHeight: responsive.h(16),
		fontWeight: 'bold',
		color: '#8293AA',
	},
	buttonContainer: {
		alignItems: 'center',
		marginTop: 'auto'
	}
});

export default styles;
