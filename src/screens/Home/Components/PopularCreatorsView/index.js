import { View, Text, FlatList, SafeAreaView } from 'react-native'
import React from 'react'

import SeeAllButton from '../../../../components/SeeAllButton'
import { popularCreatorsData } from '../../../../data/mock'
import textStyles from '../../../../helpers/contants/textStyles'
import CreatorCard from '../CreatorCard'
import styles from './styles'

export default function PopularCreatorsView() {
    return (
        <View style={styles.container}>

            <View style={styles.titleContainer}>
                <Text style={textStyles.h5Bold}>Popular creators</Text>
                <SeeAllButton />
            </View>
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={popularCreatorsData}
                    renderItem={CreatorCard}
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