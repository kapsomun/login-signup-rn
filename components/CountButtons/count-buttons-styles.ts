import responsive from '@/utils/size-normalize';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
	},

	pressed: {
		opacity: 0.3,
	},
    button: {
        width: responsive.wp(38),
        height: responsive.hp(40),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: responsive.wp(8),
    },
    decrease: {
        backgroundColor: '#e3e7ed',
    },
    increase: {
        backgroundColor: '#405efb',
        
    },
    count: {
        marginHorizontal: responsive.wp(10),
        fontSize: responsive.w(18),
        fontWeight: 'bold'
    },
    decIcon: {
        color: 'black',
        width: responsive.wp(14),
        height: responsive.hp(2),
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    incIcon : {
        color: "white",
        width: responsive.wp(14),
        height: responsive.hp(14),
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
});

export default styles;
