import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function Profile({ navigation }) {
    return (
        <View>
            <TouchableOpacity onPress={() => { navigation.navigate('EditProfile') }}>
                <Text>aqui</Text>
            </TouchableOpacity>
        </View>
    );
}