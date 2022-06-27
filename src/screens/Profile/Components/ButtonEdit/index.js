import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import textStyles from '../../../../helpers/contants/textStyles'

export default function ButtonEdit() {
    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={textStyles.labelBold}>Edit profile</Text>
            </View>
        </View>
    )
}
