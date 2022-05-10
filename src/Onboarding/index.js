import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import { arrowRight, backgroundOnboarding, iconStar } from '../assets'

export default function Onboarding() {
    return (
        <ImageBackground style={{ flex: 1 }} source={backgroundOnboarding}>

            <View style={styles.container}>

                <View style={styles.labelContainer}>
                    <Image source={iconStar} style={styles.labelIcon} />
                    <Text style={styles.label}>60k+</Text>
                    <Text style={styles.label2}>Premium recipes</Text>
                </View>

                <View style={styles.bottomContainer}>

                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Let's</Text>
                        <Text style={styles.title}>Cooking</Text>
                    </View>

                    <Text style={styles.describe}>Find best recipes for cooking</Text>

                    <TouchableOpacity>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Start cooking</Text>
                            <Image source={arrowRight} />
                        </View>
                    </TouchableOpacity>

                </View>
            </View>

        </ImageBackground>
    )
}