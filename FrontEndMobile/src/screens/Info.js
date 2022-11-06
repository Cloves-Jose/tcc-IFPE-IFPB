import React from "react";
import { View, Text } from "react-native";

export default props => {
    return (
        console.warn(props),
        <View>
            <Text>Informação</Text>
        </View>
    )
}