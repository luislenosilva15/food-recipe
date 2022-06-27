import { StyleSheet } from 'react-native';
import { mask } from '../../../../helpers/contants/colors';

export default StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 12 
    },
    image: {
        width: 380,
        height: 210,
    },
    background: {
        borderRadius: 8,
    },
    topContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    starContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: mask.transparent30,
        margin: 12,
        width: 60,
        height: 28,
        borderRadius: 10
    },
    iconStar: {
        marginRight: 4
    },
    mainButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        marginRight: 20,
        width: 32,
        height: 32,
        borderRadius: 72,
    },
    titleContainer: {
        padding: 15,
        paddingTop: 90
    },
    descriptionContainer: {
        flexDirection: 'row',
        width: '80%',
        alignItems: 'center',
    }
});