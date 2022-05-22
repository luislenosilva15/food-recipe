import { StyleSheet } from 'react-native';
import { primary, white, mask } from '../../helpers/contants/colors'
import { neutral } from '../colors';

export default StyleSheet.create({
    h4Bold: {
        fontSize: 24,
        fontFamily: 'Poppins-SemiBold',
        color: neutral.color90,
    },

    h5Bold: {
        fontSize: 20,
        fontFamily: 'Poppins-SemiBold',
        color: neutral.color90,
    },

    labelRegular: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
    },
    labelBold: {
        fontSize: 14,
        fontFamily: 'Poppins-SemiBold',
    },
    paragraphBold: {
        fontSize: 16,
        fontFamily: 'Poppins-Bold',
        color: neutral.color90,
    },
    smallBoldsmallRegular: {
        fontSize: 12,
        fontFamily: 'Poppins-Regular',
    },
    smallBold: {
        fontSize: 12,
        fontFamily: 'Poppins-SemiBold',
    },
    tiny: {
        fontSize: 10,
        fontFamily: 'Poppins-Regular',
    }

});