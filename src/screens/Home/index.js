import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import textStyles from '../../helpers/contants/textStyles'
import RecipeSearch from './Components/RecipeSearch'
import Margin from '../../components/Margin'
import TrendingNowView from './Components/TrendingNowView'

export default function Home() {
    return (
        <View style={styles.container}>

            <View style={styles.titleContainer}>
                <Text style={textStyles.h4Bold}>{`Find best recipes \nfor cooking`}</Text>
            </View>
            <RecipeSearch />

            <Margin mg={8} />

            <TrendingNowView />
        </View>
    )
}