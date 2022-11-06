import React from "react";
import { View, Text, StyleSheet } from 'react-native'
import globalStyles from '../../styles/GlobalStyles'

export default props => {
    return (
        <>
            <View style={globalStyles.container}>
                <Text style={globalStyles.subTitle}>
                    {props.text}
                </Text>
            </View>
        </>
    )
}
