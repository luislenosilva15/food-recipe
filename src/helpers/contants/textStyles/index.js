import { StyleSheet } from 'react-native';
import { primary, white, mask } from '../../helpers/contants/colors'
import { neutral } from '../colors';

export default StyleSheet.create({
    h4Bold: {
        fontSize: 24,
        fontFamily: 'Poppins-Bold',
        color: neutral.color90,
    },

    h5Bold: {
        fontSize: 20,
        fontFamily: 'Poppins-Bold',
        color: neutral.color90,
    },

    labelRegular: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
    },
    labelBold: {
        fontSize: 14,
        fontFamily: 'Poppins-Bold',
    },

});