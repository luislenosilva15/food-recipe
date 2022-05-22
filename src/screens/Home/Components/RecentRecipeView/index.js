import { View, Text, FlatList, SafeAreaView } from 'react-native'
import React from 'react'
import styles from './styles'
import textStyles from '../../../../helpers/contants/textStyles'
import SeeAllButton from '../../../../components/SeeAllButton'
import RecipeSmallCard from '../../../../components/RecipeSmallCard'
import { recentListData } from '../../../../data/mock'

export default function RecentRecipeView() {
    return (
        <View style={styles.container}>

            <View style={styles.titleContainer}>
                <Text style={textStyles.h5Bold}>Recent recipe</Text>
                <SeeAllButton />
            </View>
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={recentListData}
                    renderItem={RecipeSmallCard}
                    keyExtractor={item => item._id}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    onScrollAnimationEnd={true}
                    style={styles.flatList}
                />
            </SafeAreaView>
        </View>
    )
}