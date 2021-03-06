import { View, Text, FlatList, SafeAreaView } from 'react-native'
import React from 'react'
import styles from './styles'
import textStyles from '../../../../helpers/contants/textStyles'
import SeeAllButton from '../../../../components/SeeAllButton'
import RecipeCard from '../../../../components/RecipeCard'
import { trendingListData } from '../../../../data/mock'

export default function TrendingNowView() {
    return (
        <View style={styles.container}>

            <View style={styles.titleContainer}>
                <Text style={textStyles.h5Bold}>Trending now 🔥</Text>
                <SeeAllButton />
            </View>
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={trendingListData}
                    renderItem={RecipeCard}
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