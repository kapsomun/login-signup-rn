import { StyleSheet } from 'react-native';
import responsive from "@/utils/size-normalize";

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingVertical: responsive.wp(10),
		paddingHorizontal: responsive.hp(16),
        borderBottomWidth: 3,
        borderBottomColor: '#eee',
	},
	emptySpace: {
		flex: 1,
	},
	logoContainer: {
		flex: 1,
		alignItems: 'center',
	},
	iconsContainer: {
        flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
        justifyContent: 'flex-end',
		gap: responsive.wp(10)
	},
    icon: {
        width: responsive.wp(18),
        height: responsive.hp(18),

    }

});


export default styles;
