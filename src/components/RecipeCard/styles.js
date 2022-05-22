import { StyleSheet } from 'react-native';
import { mask, white } from '../../helpers/contants/colors';


export default StyleSheet.create({
    container: {
        margin: 10,
    },
    image: {
        height: 190,
        width: 290,
    },
    background: {
        borderRadius: 8
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    starContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: mask.transparent30,
        margin: 12,
        width: 60,
        height: 28,
        borderRadius: 10
    },
    iconStar: {
        marginRight: 4
    },
    bookmarkContainer: {
        margin: 10,
        backgroundColor: white.color0,
        borderRadius: 20
    },
    bookmark: {
        margin: 5
    },
    TitleContainer: {
        margin: 2,
        marginTop: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    threePointsImage: {
        marginBottom: 3
    },
    userCreateContainer: {
        flexDirection: 'row',
        marginTop: 8,
        alignItems: 'center'
    },
    userCreateImage: {
        width: 30,
        height: 30,
        borderRadius: 30,
        marginRight: 8,
    }

});