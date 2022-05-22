import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import textStyles from '../../../../helpers/contants/textStyles'
import { neutral } from '../../../../helpers/contants/colors'

export default function CreatorCard({ item }) {

    const { _id, firstName, lastName, image } = item

    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <Image source={image} style={styles.creatorImage} />
                <View style={styles.titleContainer}>
                    <Text style={[textStyles.smallBold, { color: neutral.color90 }]}>{firstName}</Text>
                    <Text style={[textStyles.smallBold, { color: neutral.color90 }]}>{lastName}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}