import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import textStyles from '../../../../helpers/contants/textStyles'
import ButtonEdit from '../ButtonEdit'

export default function DetailsUser({ data, navigator }) {
    const { image, name, description, numberOfRecipes, stars, followers, following } = data
    return (
        <View style={styles.container}>

            <View style={styles.containerImg}>
                <Image
                    source={image}
                    style={styles.imgProfile} />

                <TouchableOpacity
                    onPress={() => { navigator() }}>
                    <ButtonEdit />
                </TouchableOpacity>
            </View>

            <View style={styles.mainContainer}>
                <Text style={textStyles.h5Bold}>{name}</Text>
                <Text style={textStyles.labelRegular}>{description}</Text>
            </View>

            <View style={styles.sectionsContainer}>
                <Text style={textStyles.smallRegular}>Recipe</Text>
                <Text style={textStyles.smallRegular}>Stars</Text>
                <Text style={textStyles.smallRegular}>Followers</Text>
                <Text style={textStyles.smallRegular}>Following</Text>
            </View>

            <View style={styles.containerResults}>

                <View style={styles.mainResults}>
                    <Text style={textStyles.h5Bold}>{numberOfRecipes}</Text>
                </View>

                <View style={styles.mainResults}>
                    <Text style={textStyles.h5Bold}>{stars}</Text>
                </View>

                <View style={styles.mainResults}>
                    <Text style={textStyles.h5Bold}>{followers}</Text>
                </View>

                <View style={styles.mainResults}>
                    <Text style={textStyles.h5Bold}>{following}</Text>
                </View>

            </View>
        </View >
    )
}
