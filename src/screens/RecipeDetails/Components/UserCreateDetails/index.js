import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './styles'
import { neutral } from '../../../../helpers/contants/colors'
import { recipeDetails } from '../../../../data/mock'
import textStyles from '../../../../helpers/contants/textStyles'
import { iconAddress } from '../../../../assets'

export default function UserCreateDetails() {
    return (
        <View style={styles.userCreateContainer}>
            <Image source={recipeDetails.userCreateDetails.image} style={styles.userCreateImage} />

            <View style={styles.userDetailsContainer}>
                <Text style={[textStyles.paragraphBold, { marginLeft: 5 }]}>{recipeDetails.userCreateDetails.name}</Text>
                <View style={styles.adressContainer}>
                    <Image source={iconAddress} />
                    <Text style={[textStyles.labelRegular, { marginLeft: 3, color: neutral.color40, marginTop: 2 }]}>{recipeDetails.userCreateDetails.address}</Text>
                </View>
            </View>
        </View>
    )
}