import { StyleSheet } from 'react-native';
import {  primary } from '../../../../helpers/contants/colors'

export default StyleSheet.create({
    container: {
        width: 107,
        height: 36,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: primary.color50,
        borderRadius: 10
    },
    title: {
        alignItems:'center',
        marginTop: 6
    },
    labelBold: {
        color: primary.color50
    }
});