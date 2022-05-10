import { StyleSheet, ImageBackground } from 'react-native';
import { maskBlack, red, white } from '../helpers/colors';
import { fontWeightLarger, fontWeightMedium, fontWeightSmall, textLarge, textMedium, textTitle } from '../helpers/fontsSize';


export default StyleSheet.create({
    container: {
        backgroundColor: maskBlack,
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    labelContainer: {
        alignItems: 'center',
        marginTop: 40,
        flexDirection: 'row'
    },
    label: {
        padding: 2,
        fontSize: textMedium,
        color: white,
        fontWeight: fontWeightLarger
    },
    label2: {
        padding: 2,
        fontSize: textMedium,
        color: white,
        fontWeight: fontWeightMedium

    },
    labelIcon: {
        marginRight: 5
    },
    titleContainer: {
        marginBottom: 30,
        alignItems: 'center'
    },
    title: {
        fontWeight: fontWeightLarger,
        color: white,
        fontSize: 46
    },
    describe: {
        marginBottom: 30,
        color: white,
        fontWeightSmall,

    },
    button: {
        backgroundColor: red,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        paddingHorizontal: 20,
        borderRadius: 8
    },
    buttonText: {
        fontSize: textMedium,
        color: white,
        marginRight: 15,
        fontWeight: fontWeightMedium
    },
    bottomContainer: {
        marginBottom: 30
    }

});