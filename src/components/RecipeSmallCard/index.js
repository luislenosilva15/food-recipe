import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import { bookmarkCardActive, iconStar, bookmarkCardInactive, threePointsHorizontal } from '../../assets'
import textStyles from '../../helpers/contants/textStyles'
import { neutral, white } from '../../helpers/contants/colors'

export default function RecipeSmallCard({ item }) {

    const { _id, recipeImage, title, userCreateName } = item

    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <Image source={recipeImage} style={styles.recipeImage} />
                <View style={styles.titleContainer}>
                    <Text style={[textStyles.labelBold, { color: neutral.color90 }]}>{title.slice(0, 16)}</Text>
                    <Text style={[textStyles.labelBold, { color: neutral.color90 }]}>{title.length > 16 && title.slice(16, 31)} {title.length > 31 && '...'}</Text>
                </View>
                <Text style={[textStyles.tiny, { color: neutral.color40, marginHorizontal: 5 }]}>By {userCreateName}</Text>
            </View>
        </TouchableOpacity>
    )
}