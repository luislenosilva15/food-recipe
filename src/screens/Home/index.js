import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import textStyles from '../../helpers/contants/textStyles'
import RecipeSearch from './Components/RecipeSearch'
import Margin from '../../components/Margin'
import TrendingNowView from './Components/TrendingNowView'
import RecentRecipeView from './Components/RecentRecipeView'
import PopularCreatorsView from './Components/PopularCreatorsView'

export default function Home({ navigation }) {
    return (

        <ScrollView style={styles.container}>

            <View style={styles.titleContainer}>
                <TouchableOpacity onPress={() => { navigation.navigate('RecipeDetails') }}>
                    <Text style={textStyles.h4Bold}>{`Find best recipes \nfor cooking`}</Text>
                </TouchableOpacity>
            </View>
            <RecipeSearch />

            <Margin mg={8} />

            <TrendingNowView />

            <RecentRecipeView />

            <PopularCreatorsView />
        </ScrollView>
    )
}