import { StyleSheet, ImageBackground } from 'react-native';
import { fontWeightLarger, fontWeightMedium, fontWeightSmall, textLarge, textMedium, textTitle } from '../../helpers/fontsSize';
import { primary, white, mask } from '../../helpers/contants/colors'


export default StyleSheet.create({
    container: {
        backgroundColor: mask.transparent10,
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
        color: white.color0,
        fontWeight: fontWeightLarger
    },
    label2: {
        padding: 2,
        fontSize: textMedium,
        color: white.color0,
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
        color: white.color0,
        fontSize: 46
    },
    describe: {
        marginBottom: 30,
        color: white.color0,
        fontWeight: fontWeightSmall,

    },
    button: {
        backgroundColor: primary.color50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        paddingHorizontal: 20,
        borderRadius: 8
    },
    buttonText: {
        fontSize: textMedium,
        color: white.color0,
        marginRight: 15,
        fontWeight: fontWeightMedium
    },
    bottomContainer: {
        marginBottom: 30
    }

});