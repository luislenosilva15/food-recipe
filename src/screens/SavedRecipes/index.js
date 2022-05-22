import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import styles from './styles'
import textStyles from '../../helpers/contants/textStyles'
import SavedRecipesView from './Components/SavedRecipesView'
import SavedRecipeButtons from './Components/SavedRecipeButtons'
import Margin from '../../components/Margin'

export default function SavedRecipes() {
    return (
        <View style={styles.container}>
            <Text style={textStyles.h4Bold}>Saved recipes</Text>
            <Margin mg={15} />
            <SavedRecipeButtons />
            <SavedRecipesView />
        </View>
    )
}