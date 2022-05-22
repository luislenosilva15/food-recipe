import { View, Text, FlatList, SafeAreaView } from 'react-native'
import React from 'react'
import styles from './styles'
import textStyles from '../../../../helpers/contants/textStyles'
import SeeAllButton from '../../../../components/SeeAllButton'
import RecipeCard from '../RecipeCard'
import { savedRecipesData } from '../../../../data/mock'

export default function SavedRecipesView() {
    return (
        <View style={styles.container}>

            <SafeAreaView style={styles.container}>
                <FlatList
                    data={savedRecipesData}
                    renderItem={RecipeCard}
                    keyExtractor={item => item._id}
                    showsHorizontalScrollIndicator={false}
                    onScrollAnimationEnd={true}
                    style={styles.flatList}
                />
            </SafeAreaView>
        </View>
    )
}