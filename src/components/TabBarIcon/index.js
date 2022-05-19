import React from 'react'
import { Image } from 'react-native'

export default IconTabBar = ({ size, focused, color, icon, iconFocused }) => {

    return (
        <Image
            source={focused ? iconFocused : icon}
            style={{
                width: 25,
                height: 25
            }}
        ></Image>
    )
}