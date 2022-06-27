import { StyleSheet } from 'react-native';
import { neutral } from '../../../../helpers/contants/colors';

export default StyleSheet.create({
    container: {
        marginTop: 12,
        padding: 20
    },
    containerImg: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    mainContainer: {
        marginTop: 20
    },
    sectionsContainer: {
        marginTop: 18,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    containerResults: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 10
    },
    mainResults: {
        flexDirection: 'row',
    },
    lineContainer: {
        width: 375,
        height: 1,
        marginleft: 0,
        marginTop: 10,
        backgroundColor: neutral.color20
    }
});