import { View, Text, Image, ImageBackground, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import styles from './styles'
import textStyles from '../../../../helpers/contants/textStyles'
import { white } from '../../../../helpers/contants/colors'
import { iconStar } from '../../../../assets'
import ButtonShare from '../ButtonShare'

export default function RecipeCard({ item }) {

    const { _id, recipeImage, star, title, description, time } = item

    return (
        <View style={styles.container}>

            <ImageBackground
                source={recipeImage}
                style={styles.image}
                imageStyle={styles.background}>

                <View style={styles.topContainer}>

                    <View style={styles.starContainer}>
                        <Image source={iconStar} style={styles.iconStar} />
                        <Text style={[textStyles.labelBold, { color: white.color0, marginTop: 3 }]}>{star}</Text>
                    </View>

                    <View style={styles.mainButton}>
                            < ButtonShare />
                    </View>

                </View>

                <View style={styles.titleContainer}>
                    <Text style={[textStyles.paragraphBold, { color: white.color0 }]}>{title}</Text>
                    <View style={styles.descriptionContainer}>
                        <Text style={[textStyles.smallBoldsmallRegular, { color: white.color0, }]}>{description}</Text>
                        <View style={{ width: 1, height: 15, backgroundColor: white.color0, alignItems: 'center', margin: 5 }}></View>
                        <Text style={[textStyles.smallBoldsmallRegular, { color: white.color0, }]}>{time}</Text>
                    </View>
                </View>

            </ImageBackground>
        </View>

    )
}