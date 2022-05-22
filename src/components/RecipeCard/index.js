import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import { bookmarkCardActive, iconStar, bookmarkCardInactive, threePointsHorizontal } from '../../assets'
import textStyles from '../../helpers/contants/textStyles'
import { neutral, white } from '../../helpers/contants/colors'

export default function RecipeCard({ item }) {

    const { _id, isFavorite, recipeImage, star, title, userCreateImage, userCreateName } = item

    return (

        <View style={styles.container}>
            <ImageBackground source={recipeImage} style={styles.image} imageStyle={styles.background}>

                <View style={styles.topContainer}>
                    <View style={styles.starContainer}>
                        <Image source={iconStar} style={styles.iconStar} />
                        <Text style={[textStyles.labelBold, { color: white.color0, marginTop: 3 }]}>{star}</Text>
                    </View>
                    <TouchableOpacity>
                        <View style={styles.bookmarkContainer}>
                            <Image source={isFavorite ? bookmarkCardActive : bookmarkCardInactive} style={styles.bookmark} />
                        </View>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
            <View style={styles.TitleContainer}>
                <Text style={textStyles.paragraphBold}>{title}</Text>
                <Image source={threePointsHorizontal} style={styles.threePointsImage} />
            </View>
            <View style={styles.userCreateContainer}>
                <Image source={userCreateImage} style={styles.userCreateImage} />
                <Text style={[textStyles.smallRegular, { color: neutral.color40 }]}>By {userCreateName}</Text>
            </View>
        </View>

    )
}