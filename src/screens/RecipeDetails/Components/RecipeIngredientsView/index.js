import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import textStyles from '../../../../helpers/contants/textStyles'
import { neutral } from '../../../../helpers/contants/colors'
import { recipeDetails } from '../../../../data/mock'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FlatList } from 'react-native-gesture-handler'
import IngredientCard from '../IngredientCard'

export default function RecipeIngredientsView() {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={textStyles.h5Bold}>Ingredients</Text>
                <Text style={[textStyles.labelRegular, { color: neutral.color40 }]}>{recipeDetails.Ingredients.length} items</Text>
            </View>

            <SafeAreaView style={styles.listContainer}>
                {recipeDetails.Ingredients.map((item, index) => (
                    <IngredientCard item={item} key={index} />
                ))}
            </SafeAreaView>
        </View>
    )
}