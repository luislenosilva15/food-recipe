import React, { useState } from 'react'
import Onboarding from './src/screens/Onboarding'
import Home from './src/screens/Home'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { homeIcon, homeIconFocused, profileIconFocused, profileIcon, bookmarkIcon, bookmarkIconFocused, notificationIcon, notificationIconFocused } from './src/assets';
import TabBarIcon from './src/components/TabBarIcon';
import SavedRecipes from './src/screens/SavedRecipes';
import Profile from './src/screens/Profile';
import EdirProfile from './src/screens/EditProfile';
import RecipeDetails from './src/screens/RecipeDetails';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
    return (

        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
                height: 80
            }
        }}>

            <Tab.Screen name="Home" component={Home} options={{
                tabBarIcon: ({ focused, size }) => (
                    <TabBarIcon size={size} icon={homeIcon} iconFocused={homeIconFocused} focused={focused} />
                )

            }} />

            <Tab.Screen name="SavedRecipes" component={SavedRecipes} options={{
                tabBarIcon: ({ focused, size }) => (
                    <TabBarIcon size={size} icon={bookmarkIcon} iconFocused={bookmarkIconFocused} focused={focused} />
                )

            }} />

            <Tab.Screen name="Notification" component={Home} options={{
                tabBarIcon: ({ focused, size }) => (
                    <TabBarIcon size={size} icon={notificationIcon} iconFocused={notificationIconFocused} focused={focused} />
                )

            }} />

            <Tab.Screen name="Profile" component={Home} options={{
                tabBarIcon: ({ focused, size }) => (
                    <TabBarIcon size={size} icon={profileIcon} iconFocused={profileIconFocused} focused={focused} />
                )

            }} />
        </Tab.Navigator>

    )
}


function DefaultNavigation() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }} >
            <Stack.Screen name="HomeTabs" component={HomeTabs} />
            <Stack.Screen name="RecipeDetails" component={RecipeDetails} />

        </Stack.Navigator>
    )
}


export default function App() {

    const [initialState, setInitialState] = useState(true)

    return (
        <NavigationContainer >
            <DefaultNavigation />
        </NavigationContainer>

    )
}