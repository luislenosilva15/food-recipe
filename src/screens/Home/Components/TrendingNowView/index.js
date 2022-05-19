import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import textStyles from '../../../../helpers/contants/textStyles'
import SeeAllButton from '../../../../components/SeeAllButton'

export default function TrendingNowView() {
    return (
        <View style={styles.container}>
            <Text style={textStyles.h5Bold}>Trending now 🔥</Text>
            <SeeAllButton />
        </View>
    )
}