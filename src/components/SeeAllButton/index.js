import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import textStyles from '../../helpers/contants/textStyles'
import { primary } from '../../helpers/contants/colors'
import { arrowRightRedIcon } from '../../assets'
import styles from './styles'


export default function SeeAllButton() {
    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <Text style={[textStyles.labelBold, { color: primary.color50 }]}>See all</Text>
                <Image source={arrowRightRedIcon} style={styles.icon} />
            </View>
        </TouchableOpacity>
    )
}