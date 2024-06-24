import responsive from '@/utils/size-normalize';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	count: {
		flexDirection: 'row',
		alignItems: 'center',
        marginBottom: responsive.hp(10)
	},

	pressed: {
		opacity: 0.3,
	},
    button: {
        width: responsive.wp(40),
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
    decText: {
        color: 'black',
        fontSize: responsive.w(30),
        lineHeight: responsive.h(30),
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    incText : {
        color: "white",
        fontSize: responsive.w(30),
        lineHeight: responsive.h(30),
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
});

export default styles;
