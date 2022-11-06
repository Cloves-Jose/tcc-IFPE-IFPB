import React from 'react'
import { View, Text } from 'react-native'
import globalStyles from '../../styles/GlobalStyles'

export default props => {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>{props.title}</Text>
        </View>
    )
}