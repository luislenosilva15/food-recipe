import { View, Text, ScrollView } from 'react-native'
import { detailsUser, recipesProfile } from '../../data/mock';
import React from 'react'
import textStyles from '../../helpers/contants/textStyles'
import styles from './styles';
import DetailsUser from './Components/DetailsUser';
import Line from './Components/Line';
import ListUserRecipes from './Components/ListUserRecipes';

export default function Profile({ navigation }) {
    const Editprofile = () => { navigation.navigate('EditProfile') }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={textStyles.h4Bold}>My Profile</Text>
            </View>
            < DetailsUser data={detailsUser[0]} navigator={Editprofile} />
            <Line />
            <ListUserRecipes data={recipesProfile} />
        </ScrollView>
    );
}