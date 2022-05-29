import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './styles'
import TopBar from './Components/TopBar'
import textStyles from '../../helpers/contants/textStyles'
import { recipeDetails } from '../../data/mock'
import { iconAddress, iconStarYellow } from '../../assets'
import { neutral } from '../../helpers/contants/colors'
import RecipeIngredientsView from './Components/RecipeIngredientsView'
import UserCreateDetails from './Components/UserCreateDetails'
import { ScrollView } from 'react-native-gesture-handler'

export default function RecipeDetails() {
    return (
        <View style={styles.container}>
            <TopBar />
            <ScrollView>

                <Text style={textStyles.h4Bold}>How to make french toast</Text>
                <View style={styles.recipeImageContainer}>
                    <Image source={recipeDetails.image} style={styles.recipeImage} />
                </View>

                <View style={styles.starContainer}>
                    <Image source={iconStarYellow} />
                    <Text style={[textStyles.labelBold, { color: neutral.color90, marginTop: 2, marginLeft: 5 }]}>{recipeDetails.star}</Text>
                </View>
                <UserCreateDetails />

                <RecipeIngredientsView />

            </ScrollView>
        </View>
    )
}