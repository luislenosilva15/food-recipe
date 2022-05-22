import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import textStyles from '../../../../helpers/contants/textStyles'
import { primary, white } from '../../../../helpers/contants/colors'


export default function SavedRecipeButtons({ }) {
    const [status, setStatus] = useState('popular')

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => { setStatus('popular') }}>
                <View style={status == 'popular' ? styles.buttonFocused : styles.buttonNoFocused}>
                    <Text style={[textStyles.smallBold, status == 'popular' ? styles.textFocused : styles.textNoFocused]}>Popular</Text>
                </View>
            </TouchableOpacity >

            <TouchableOpacity style={styles.button} onPress={() => { setStatus('recent') }}>
                <View style={status == 'recent' ? styles.buttonFocused : styles.buttonNoFocused}>
                    <Text style={[textStyles.smallBold, status == 'recent' ? styles.textFocused : styles.textNoFocused]}>Recent</Text>
                </View>
            </TouchableOpacity>
        </View >
    )
}