import { StyleSheet } from 'react-native';
import { neutral } from '../../../../helpers/contants/colors';


export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: neutral.color30,
        height: 47
    },
    icon: {
        margin: 10,
        marginTop: 7,
    },
    input: {
        width: '90%'
    }
});