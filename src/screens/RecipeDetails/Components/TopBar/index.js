import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import { arrowLeft, threePointsHorizontal } from '../../../../assets'


export default function TopBar() {
    return (
        <View style={styles.container}>
            <View style={styles.imagesContainer}>
                <TouchableOpacity>
                    <Image source={arrowLeft} style={styles.iconImage} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image source={threePointsHorizontal} style={styles.iconImage} />
                </TouchableOpacity>

            </View>


        </View>
    )
}