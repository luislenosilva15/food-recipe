import { StyleSheet, ImageBackground } from 'react-native';
import { primary, white } from '../../../../helpers/contants/colors';
import { fontWeightLarger, fontWeightMedium, fontWeightSmall, textLarge, textMedium, textTitle } from '../../helpers/fontsSize';


export default StyleSheet.create({
    container: {

        marginHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    button: {
        width: '48%'
    },
    buttonFocused: {
        backgroundColor: primary.color50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10

    },
    buttonNoFocused: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10

    },
    textFocused: {
        color: 'white',
        margin: 8,
    },
    textNoFocused: {
        color: primary.color30,
        margin: 8,

    }

})