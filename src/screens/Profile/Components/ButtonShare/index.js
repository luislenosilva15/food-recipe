import { View, Image } from "react-native";
import React from 'react'
import styles from './styles'

export default function ButtonShare() {

    const ThreePointsRed = require('../../../../assets/images/icons/ThreePointsRed/redPoints.png')
    return (
        <View style={styles.container}>

            <View style={styles.mainButton}>
                <Image
                    source={ThreePointsRed} />
            </View>

        </View>

    )
}