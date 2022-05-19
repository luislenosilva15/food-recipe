import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './styles'
import { searchIcon } from '../../../../assets'
import textStyles from '../../../../helpers/contants/textStyles'
import { neutral } from '../../../../helpers/contants/colors'
import { TextInput } from 'react-native-gesture-handler'


export default function RecipeSearch() {
    return (
        <View style={styles.container}>
            <Image source={searchIcon} style={styles.icon} />
            <TextInput
                placeholder='Search recipes'
                placeholderTextColor={neutral.color30}
                style={styles.input}
            ></TextInput>
        </View>
    )
}