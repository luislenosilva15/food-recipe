import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './styles'
import { iconCardMilk } from '../../../../assets'
import textStyles from '../../../../helpers/contants/textStyles'
import { neutral } from '../../../../helpers/contants/colors'

export default function IngredientCard({ item }) {
    const { name, quantity } = item
    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <View style={styles.cardIconContainer}>
                    <Image source={iconCardMilk} style={styles.cardIconImage} />
                </View>
                <Text style={textStyles.paragraphBold}>{name}</Text>
            </View>
            <Text style={[textStyles.labelRegular, { color: neutral.color40, marginRight: 15 }]}>{quantity}</Text>
        </View>
    )
}