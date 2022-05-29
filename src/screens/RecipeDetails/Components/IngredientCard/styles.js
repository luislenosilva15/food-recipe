import { StyleSheet } from 'react-native';
import { neutral } from '../../../../helpers/contants/colors';

export default StyleSheet.create({
    container: {
        margin: 2,
        backgroundColor: neutral.color10,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
        height: 80,
        borderRadius: 15,
        justifyContent: 'space-between'
    },
    cardIconContainer: {
        marginHorizontal: 15,
        height: 50,
        width: 50,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    cardIconImage: {
        height: 30,
        width: 30
    },
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})