import { View, FlatList, SafeAreaView } from 'react-native'
import React from 'react'
import styles from './styles'
import { recipesProfile } from '../../../../data/mock'
import RecipeCard from '../RecipeCard'

export default function ListUserRecipes() {
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <FlatList
                    data={recipesProfile}
                    renderItem={RecipeCard}
                    keyExtractor={item => item._id}
                    horizontal={false}
                    showsHorizontalScrollIndicator={false}
                />
            </SafeAreaView>
        </View>
    )
}